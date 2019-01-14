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

import {
  // RoundButton,
  LabelInput,
  LabledWrapper,
  PhotoUpload,
  NavigationHeader,
} from '../../components';

import {
  Container,
  Content,
  DropDown,
  CategoryArea,
  LeftCol,
  RightCol,
  ImageArea,
  ColorPickerTile,
  ColorPickerWrapper,
} from './styles';
import reducer from './reducer';
import saga from './saga';
import {
  getCategory1Action,
  getCategory2Action,
  getCategory3Action,
  getOtherFeaturesAction,
  setItemCreatePhase1Action,
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
  makeSelectSeason,
  makeSelectStyles,
} from './selectors';
import { makeSelectIdToken } from '../App/selectors';

import { imageConfig, colorConfig } from './constants';
import LabeledWrapper from '../../components/LabeledWrapper';

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
      season: List([]),
      styles: List([]),
      imageConfigList: [...imageConfig],
      colorConfigList: [...colorConfig],
      selectedGender: null,
      selectedCategory1: null,
      selectedCategory2: null,
      selectedCategory3: null,
      selectedStyle: null,
      selectedTexture: null,
      selectedThickness: null,
      selectedElasticity: null,
      selectedSeason: null,
      selectedQuality: null,
      selectedQuantity: null,
      selectedLining: null,
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

    if (!is(this.props.category2, nextProps.category2)) {
      const transformed2 = nextProps.category2.map(category => ({
        key: category.id,
        id: category.id,
        text: category.name,
        value: category.id,
      }));
      this.setState({ category2: transformed2, category3: List([]) });
    }

    if (!is(this.props.category3, nextProps.category3)) {
      const transformed3 = nextProps.category3.map(category => ({
        key: category.id,
        id: category.id,
        text: category.name,
        value: category.id,
      }));
      this.setState({ category3: transformed3 });
    }

    if (!is(this.props.styles, nextProps.styles)) {
      const styles = nextProps.styles.map(data => ({
        key: data.id,
        id: data.id,
        text: data.name,
        value: data.id,
      }));
      this.setState({ styles });
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
      const season = nextProps.season.map(data => ({
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
        season,
      });
    }
  }

  onChangeGender = (event, data) => {
    this.setState({ selectedGender: data.value });
  };

  onChangeCategory1 = (event, data) => {
    const { getCategory2 } = this.props;
    getCategory2({ category1Id: data.value });
    this.setState({ selectedCategory1: data.value });
  };

  onChangeCategory2 = (event, data) => {
    const { getCategory3 } = this.props;
    getCategory3({ category2Id: data.value });
    this.setState({ selectedCategory2: data.value });
  };

  onChangeCategory3 = (event, data) => {
    this.setState({ selectedCategory3: data.value });
  };

  onChangeElasticity = (event, data) => {
    this.setState({ selectedElasticity: data.value });
  };

  onChangeThickness = (event, data) => {
    this.setState({ selectedThickness: data.value });
  };

  onChangeQuantity = (event, data) => {
    this.setState({ selectedQuantity: data.value });
  };

  onChangeStyle = (event, data) => {
    this.setState({ selectedStyle: data.value });
  };

  onChangeSeason = (event, data) => {
    this.setState({ selectedSeason: data.value });
  };

  onChangeLining = (event, data) => {
    this.setState({ selectedLining: data.value });
  };

  onChangeOpacity = (event, data) => {
    this.setState({ selectedOpacity: data.value });
  };

  onChangeTexture = (event, data) => {
    this.setState({ selectedTexture: data.value });
  };

  onChangeQuality = (event, data) => {
    this.setState({ selectedQuality: data.value });
  };

  handleColor = ({ index }) => {
    const { colorConfigList } = this.state;
    const transformedConfig = [...colorConfigList];
    if (transformedConfig[index].checked) {
      transformedConfig[index].checked = false;
    } else {
      transformedConfig[index].checked = true;
    }
    this.setState({ colorConfigList: transformedConfig });
  };

  handleBase64 = ({ fileArr, index }) => {
    const { imageConfigList } = this.state;
    const transformedConfig = [...imageConfigList];
    transformedConfig[index].preview = fileArr.base64;
    this.setState({ imageConfigList: transformedConfig });
  };

  onClickNext = () => {
    const { setItemCreatePhase1 } = this.props;
    const {
      itemName,
      itemPrice,
      selectedCategory1,
      selectedCategory2,
      selectedCategory3,
      selectedElasticity,
      selectedGender,
      selectedLining,
      selectedOpacity,
      selectedQuality,
      selectedQuantity,
      selectedSeason,
      selectedStyle,
      selectedTexture,
      selectedThickness,
      imageConfigList,
      colorConfigList,
    } = this.state;
    const filteredImageList = imageConfigList.filter(
      image => image.preview !== null,
    );
    const filteredColorList = colorConfigList.filter(color => color.checked);
    const selectedImageList = [];
    const selectedColorList = [];
    filteredImageList.map(image => selectedImageList.push(image.preview));
    filteredColorList.map(color => selectedColorList.push(color.eng_value));
    const itemCreatePhase1 = {
      name: itemName,
      price: itemPrice,
      category1: selectedCategory1,
      category2: selectedCategory2,
      category3: selectedCategory3,
      sex: selectedGender,
      elasticity: selectedElasticity,
      quality: selectedQuality,
      thickness: selectedThickness,
      texture: selectedTexture,
      lining: selectedLining,
      opacity: selectedOpacity,
      style: selectedStyle,
      remain: selectedQuantity,
      images: selectedImageList,
      season: selectedSeason,
      // colors: selectedColorList,
    };

    setItemCreatePhase1({ itemCreatePhase1 });

    console.log('상품명 : ', itemName);
    console.log('상품가격 : ', itemPrice);
    console.log('카테고리1 : ', selectedCategory1);
    console.log('카테고리2 : ', selectedCategory2);
    console.log('카테고리3 : ', selectedCategory3);
    console.log('신축성 : ', selectedElasticity);
    console.log('성별 : ', selectedGender);
    console.log('안감 : ', selectedLining);
    console.log('재질 : ', selectedQuality);
    console.log('재고 : ', selectedQuantity);
    console.log('시즌 : ', selectedSeason);
    console.log('비침 : ', selectedOpacity);
    console.log('스타일 : ', selectedStyle);
    console.log('촉감 : ', selectedTexture);
    console.log('두께감 : ', selectedThickness);
    console.log('이미지 배열 : ', selectedImageList);
    console.log('색깔 배열 : ', selectedColorList);
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
      season,
      styles,
      imageConfigList,
      colorConfigList,
    } = this.state;
    const category1JS = category1.toJS();
    const category2JS = category2.toJS();
    const category3JS = category3.toJS();
    const thicknessJS = thickness.toJS();
    const stylesJS = styles.toJS();
    const textureJS = texture.toJS();
    const opacityJS = opacity.toJS();
    const liningJS = lining.toJS();
    const qualityJS = quality.toJS();
    const elasticityJS = elasticity.toJS();
    const quantityJS = quantity.toJS();
    const genderJS = gender.toJS();
    const seasonJS = season.toJS();

    return (
      <Container>
        <Helmet>
          <title>상품등록</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <NavigationHeader
          headerTitle="새상품 등록"
          onClickRight={this.onClickNext}
          rightButtonText="다음으로"
        />
        <Content>
          <CategoryArea>
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
              <LabledWrapper label="성별">
                <DropDown
                  key="gender"
                  fluid
                  selection
                  placeholder="성별"
                  options={genderJS}
                  onChange={this.onChangeGender}
                />
              </LabledWrapper>
              <LabledWrapper label="스타일">
                <DropDown
                  key="style"
                  fluid
                  selection
                  placeholder="상품의 전반적인 스타일은 무엇인가요?"
                  options={stylesJS}
                  onChange={this.onChangeStyle}
                />
              </LabledWrapper>
              <LabledWrapper label="재고">
                <DropDown
                  key="quantity"
                  fluid
                  selection
                  placeholder="재고"
                  options={quantityJS}
                  onChange={this.onChangeQuantity}
                />
              </LabledWrapper>
              <LabeledWrapper label="색상">
                <ColorPickerWrapper>
                  {colorConfigList.map((color, index) => (
                    <ColorPickerTile
                      key={color.key}
                      checked={color.checked}
                      bgColor={color.color}
                      onClick={() => this.handleColor({ color, index })}
                    />
                  ))}
                </ColorPickerWrapper>
              </LabeledWrapper>
              <LabeledWrapper label="카테고리1">
                <DropDown
                  key="category1"
                  fluid
                  selection
                  placeholder="카테고리1"
                  options={category1JS}
                  onChange={this.onChangeCategory1}
                />
              </LabeledWrapper>
              <LabeledWrapper label="카테고리2">
                <DropDown
                  key="category2"
                  fluid
                  selection
                  placeholder="카테고리2"
                  options={category2JS}
                  disabled={category2.size === 0}
                  onChange={this.onChangeCategory2}
                />
              </LabeledWrapper>

              <LabeledWrapper label="카테고리3">
                <DropDown
                  fluid
                  key="category3"
                  selection
                  placeholder="카테고리3"
                  options={category3JS}
                  disabled={category3.size === 0}
                  onChange={this.onChangeCategory3}
                />
              </LabeledWrapper>
            </LeftCol>
            <RightCol>
              <LabeledWrapper label="신축성">
                <DropDown
                  fluid
                  key="elastic"
                  selection
                  placeholder="신축성"
                  options={elasticityJS}
                  onChange={this.onChangeElasticity}
                />
              </LabeledWrapper>
              <LabeledWrapper label="재질">
                <DropDown
                  fluid
                  key="quality"
                  selection
                  placeholder="재질"
                  options={qualityJS}
                  onChange={this.onChangeQuality}
                />
              </LabeledWrapper>
              <LabeledWrapper label="비침">
                <DropDown
                  fluid
                  key="opacity"
                  selection
                  placeholder="비침"
                  options={opacityJS}
                  onChange={this.onChangeOpacity}
                />
              </LabeledWrapper>
              <LabeledWrapper label="촉감">
                <DropDown
                  fluid
                  key="texture"
                  selection
                  placeholder="촉감"
                  options={textureJS}
                  onChange={this.onChangeTexture}
                />
              </LabeledWrapper>
              <LabeledWrapper label="안감">
                <DropDown
                  fluid
                  key="lining"
                  selection
                  placeholder="상품의 안감을 선택해주세요"
                  options={liningJS}
                  onChange={this.onChangeLining}
                />
              </LabeledWrapper>
              <LabeledWrapper label="두께감">
                <DropDown
                  fluid
                  key="thickness"
                  selection
                  placeholder="상품의 전반적인 두께감을 선택해주세요"
                  options={thicknessJS}
                  onChange={this.onChangeThickness}
                />
              </LabeledWrapper>
              <LabeledWrapper label="시즌">
                <DropDown
                  fluid
                  key="season"
                  selection
                  placeholder="없음"
                  options={seasonJS}
                  onChange={this.onChangeSeason}
                />
              </LabeledWrapper>
            </RightCol>
          </CategoryArea>
          <ImageArea>
            {imageConfigList.map((data, index) => (
              <PhotoUpload
                key={data.key}
                title={data.title}
                preview={data.preview}
                index={index}
                handleBase={fileArr =>
                  this.handleBase64({ fileArr, data, index })
                }
              />
            ))}
          </ImageArea>
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
  season: PropTypes.instanceOf(List),
  styles: PropTypes.instanceOf(List),
  getCategory1: PropTypes.func,
  getCategory2: PropTypes.func,
  getCategory3: PropTypes.func,
  otherFeaturesLoading: PropTypes.bool,
  // pushUrl: PropTypes.func,
  setItemCreatePhase1: PropTypes.func,
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
  setItemCreatePhase1: ({ itemCreatePhase1 }) =>
    dispatch(setItemCreatePhase1Action({ itemCreatePhase1 })),
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
  season: makeSelectSeason(),
  styles: makeSelectStyles(),
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
