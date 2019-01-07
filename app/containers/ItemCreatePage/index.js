/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { is, List } from 'immutable';
import { push, replace } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {

// } from 'containers/App/selectors';

import { RoundButton, LabelInput } from '../../components';

import { Container, Content, DropDown, Row, LeftCol, RightCol } from './styles';
import reducer from './reducer';
import saga from './saga';
import {
  getCategory1Action,
  getCategory2Action,
  getCategory3Action,
  getOtherFeaturesAction,
} from './actions';
import {
  makeSelectCategory1,
  makeSelectCategory2,
  makeSelectCategory3,
  makeSelectCategory3Loading,
  makeSelectElasticity,
  makeSelectLining,
  makeSelectOpacity,
  makeSelectThickness,
  makeSelectTexture,
  makeSelectQuality,
  makeSelectOtherFeaturesLoading,
} from './selectors';
import { makeSelectIdToken } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
class ItemCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itemName: '',
      gender: List([
        { key: 0, text: '남성', value: 0, id: 0 },
        { key: 1, text: '여성', value: 1, id: 1 },
      ]),
      quantity: List([
        { key: 0, text: '무한재고', value: 0, id: 0 },
        { key: 1, text: '유한재고', value: 1, id: 1 },
      ]),
      category1: List([]),
      category2: List([]),
      category3: List([]),
      thickness: List([]),
      texture: List([]),
      opacity: List([]),
      lining: List([]),
      quality: List([]),
      elasticity: List([]),
    };
  }

  componentDidMount() {
    const { replaceUrl, idToken, getCategory1 } = this.props;
    if (!idToken) {
      replaceUrl('/signIn');
    }
    getCategory1();
  }

  componentWillReceiveProps(nextProps) {
    if (!is(this.props.category1, nextProps.category1)) {
      const transformed1 = nextProps.category1.map(category => ({
        key: category.id,
        id: category.id,
        text: category.name,
        value: category.id,
      }));
      this.setState({ category1: transformed1, category3: List([]) });
    }

    if ((this.props.category2, nextProps.category2)) {
      const transformed2 = nextProps.category2.map(category => ({
        key: category.id,
        id: category.id,
        text: category.name,
        value: category.id,
      }));
      this.setState({ category2: transformed2, category3: List([]) });
    }

    if ((this.props.category3, nextProps.category3)) {
      const transformed3 = nextProps.category3.map(category => ({
        key: category.id,
        id: category.id,
        text: category.name,
        value: category.id,
      }));
      this.setState({ category3: transformed3 });
    }

    if (this.props.otherFeaturesLoading && !nextProps.otherFeaturesLoading) {
      const elasticity = nextProps.elasticity.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      const opacity = nextProps.opacity.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      const texture = nextProps.texture.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      const thickness = nextProps.thickness.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      const quality = nextProps.quality.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      const lining = nextProps.lining.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      this.setState({
        elasticity,
        opacity,
        texture,
        thickness,
        lining,
        quality,
      });
    }
  }

  onChangeCategory1 = (event, data) => {
    const { getCategory2 } = this.props;
    getCategory2({ category1Id: data.value });
  };

  onChangeCategory2 = (event, data) => {
    const { getCategory3 } = this.props;
    getCategory3({ category2Id: data.value });
  };

  render() {
    const {
      category1,
      category2,
      category3,
      thickness,
      texture,
      opacity,
      lining,
      quality,
      elasticity,
      gender,
      itemName,
      itemPrice,
      quantity,
    } = this.state;
    const category1JS = category1.toJS();
    const category2JS = category2.toJS();
    const category3JS = category3.toJS();
    const thicknessJS = thickness.toJS();
    const textureJS = texture.toJS();
    const opacityJS = opacity.toJS();
    const liningJS = lining.toJS();
    const qualityJS = quality.toJS();
    const elasticityJS = elasticity.toJS();
    const quantityJS = quantity.toJS();
    const genderJS = gender.toJS();

    return (
      <Container>
        <Helmet>
          <title>상품등록</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Content>
          <Row>
            <LeftCol>
              <LabelInput
                label="상품명"
                name="itemName"
                value={itemName}
                placeholder="영문 / 한글 / 숫자"
                onChange={e => this.setState({ itemName: e.target.value })}
              />
              <LabelInput
                label="판매가격"
                name="itemName"
                placeholder="판매가격"
                value={itemPrice}
                onChange={e => this.setState({ itemPrice: e.target.value })}
              />
              <DropDown
                key="gender"
                fluid
                selection
                placeholder="성별"
                options={genderJS}
                // onChange={this.onChangeCategory1}
              />
              <DropDown
                key="quantity"
                fluid
                selection
                placeholder="재고"
                options={quantityJS}
                // onChange={this.onChangeCategory1}
              />
              <DropDown
                key="category1"
                fluid
                selection
                placeholder="카테고리1"
                options={category1JS}
                onChange={this.onChangeCategory1}
              />
              <DropDown
                key="category2"
                fluid
                selection
                placeholder="카테고리2"
                options={category2JS}
                disabled={category2.size === 0}
                onChange={this.onChangeCategory2}
              />
            </LeftCol>
            <RightCol>
              <DropDown
                fluid
                key="category3"
                selection
                placeholder="카테고리3"
                options={category3JS}
                disabled={category3.size === 0}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="elastic"
                selection
                placeholder="신축성"
                options={elasticityJS}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="quality"
                selection
                placeholder="재질"
                options={qualityJS}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="opacity"
                selection
                placeholder="비침"
                options={opacityJS}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="texture"
                selection
                placeholder="촉감"
                options={textureJS}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="lining"
                selection
                placeholder="안감"
                options={liningJS}
                // onChange={this.onChangeCategory2}
              />
              <DropDown
                fluid
                key="thickness"
                selection
                placeholder="두께"
                options={thicknessJS}
                // onChange={this.onChangeCategory2}
              />
            </RightCol>
          </Row>
          <RoundButton>상품등록</RoundButton>
        </Content>
      </Container>
    );
  }
}

ItemCreatePage.propTypes = {
  // pushUrl: PropTypes.func,
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
  category1: PropTypes.instanceOf(List),
  category2: PropTypes.instanceOf(List),
  category3: PropTypes.instanceOf(List),
  thickness: PropTypes.instanceOf(List),
  lining: PropTypes.instanceOf(List),
  texture: PropTypes.instanceOf(List),
  elasticity: PropTypes.instanceOf(List),
  opacity: PropTypes.instanceOf(List),
  quality: PropTypes.instanceOf(List),
  getCategory1: PropTypes.func,
  getCategory2: PropTypes.func,
  getCategory3: PropTypes.func,
  otherFeaturesLoading: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  getCategory1: () => dispatch(getCategory1Action()),
  getCategory2: ({ category1Id }) =>
    dispatch(getCategory2Action({ category1Id })),
  getCategory3: ({ category2Id }) =>
    dispatch(getCategory3Action({ category2Id })),
  getOtherFeatures: () => dispatch(getOtherFeaturesAction()),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
  category1: makeSelectCategory1(),
  category2: makeSelectCategory2(),
  category3: makeSelectCategory3(),
  category3Loading: makeSelectCategory3Loading(),
  elasticity: makeSelectElasticity(),
  thickness: makeSelectThickness(),
  texture: makeSelectTexture(),
  opacity: makeSelectOpacity(),
  quality: makeSelectQuality(),
  lining: makeSelectLining(),
  otherFeaturesLoading: makeSelectOtherFeaturesLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'itemCreate', reducer });
const withSaga = injectSaga({ key: 'itemCreate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemCreatePage);
