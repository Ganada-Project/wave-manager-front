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

import { Container, Content, Category1, Category2, Category3 } from './styles';
import reducer from './reducer';
import saga from './saga';
import {
  getCategory1Action,
  getCategory2Action,
  getCategory3Action,
} from './actions';
import {
  makeSelectCategory1,
  makeSelectCategory2,
  makeSelectCategory3,
  makeSelectCategory3Loading,
} from './selectors';
import { makeSelectIdToken } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
class ItemCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itemName: '',
      category1: List([]),
      category2: List([]),
      category3: List([]),
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
    const { category1, category2, category3 } = this.state;
    const category1JS = category1.toJS();
    const category2JS = category2.toJS();
    const category3JS = category3.toJS();

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
          <LabelInput
            label="상품명"
            name="itemName"
            placeholder="영문 / 한글 / 숫자"
            // onChange={e => this.setState({ itemName: e.target.value })}
          />
          <LabelInput
            label="판매가격"
            name="itemName"
            placeholder="판매가격"
            // onChange={e => this.setState({ itemPrice: e.target.value })}
          />
          <Category1
            key="category1"
            fluid
            selection
            placeholder="카테고리1"
            options={category1JS}
            onChange={this.onChangeCategory1}
          />
          <Category2
            key="category2"
            fluid
            selection
            placeholder="카테고리2"
            options={category2JS}
            disabled={category2.size === 0}
            onChange={this.onChangeCategory2}
          />
          <Category3
            fluid
            key="category3"
            selection
            placeholder="카테고리3"
            options={category3JS}
            disabled={category3.size === 0}
            // onChange={this.onChangeCategory2}
          />
          <RoundButton>상품등록</RoundButton>
          상품등록 페이지
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
  getCategory1: PropTypes.func,
  getCategory2: PropTypes.func,
  getCategory3: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  getCategory1: () => dispatch(getCategory1Action()),
  getCategory2: ({ category1Id }) =>
    dispatch(getCategory2Action({ category1Id })),
  getCategory3: ({ category2Id }) =>
    dispatch(getCategory3Action({ category2Id })),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
  category1: makeSelectCategory1(),
  category2: makeSelectCategory2(),
  category3: makeSelectCategory3(),
  category3Loading: makeSelectCategory3Loading(),
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
