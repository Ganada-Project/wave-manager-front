/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Modal, Dropdown, Button } from 'semantic-ui-react';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {

// } from 'containers/App/selectors';

import { NavigationHeader, SizeUpload, LabelInput } from '../../components';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIdToken } from '../App/selectors';
import { postItemSizeAction } from './actions';
import { initialSizeList, measure } from './constants';

/* eslint-disable react/prefer-stateless-function */
class ItemCreateSizePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sizeList: initialSizeList,
      shoulderWidth: 0,
      shoulderMeasure: 2,
      chestLength: 0,
      chestMeasure: 2,
      armLength: 0,
      armMeasure: 2,
      totalLength: 0,
      totalMeasure: 2,
      quantity: 0,
    };
  }

  componentDidMount() {
    const { replaceUrl, idToken } = this.props;
    if (!idToken) {
      replaceUrl('/signIn');
    }
  }

  close = () => this.setState({ open: false });

  onClickSize = ({ size, index }) => () => {
    console.log(size);
    const {
      sizeList,
      sizeName,
      shoulderWidth,
      // shoulderMeasure,
      // chestLength,
      // chestMeasure,
      // armLength,
      // armMeasure,
      // totalLength,
      // totalMeasure,
      // quantity,
    } = this.state;
    const newSizeList = [...sizeList];
    newSizeList[index].sizeName = sizeName;
    newSizeList[index].shoulderWidth = shoulderWidth;
    this.setState({ open: true });
  };

  onClickAdd = () => {
    // const { postItemSize } = this.props;
    const {
      sizeName,
      shoulderWidth,
      shoulderMeasure,
      chestLength,
      chestMeasure,
      armLength,
      armMeasure,
      totalLength,
      totalMeasure,
      quantity,
    } = this.state;
    const sizeObject = {
      height: totalLength,
      height_measure: totalMeasure,
      arm: armLength,
      arm_measure: armMeasure,
      chest: chestLength,
      chest_measure: chestMeasure,
      shoulder: shoulderWidth,
      shoulder_measure: shoulderMeasure,
      remain: quantity,
      name: sizeName,
    };
    console.log(sizeObject);
    // postItemSize({ sizeObject });
  };

  onChangeShoulderMeasure = (event, data) => {
    this.setState({ shoulderMeasure: data.value });
  };

  onChangeChestMeasure = (event, data) => {
    this.setState({ chestMeasure: data.value });
  };

  onChangeArmMeasure = (event, data) => {
    this.setState({ armMeasure: data.value });
  };

  onChangeTotalMeasure = (event, data) => {
    this.setState({ totalMeasure: data.value });
  };

  render() {
    const { sizeList, open } = this.state;
    return (
      <Container>
        <Helmet>
          <title>상품사이즈등록</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Modal size="small" open={open} onClose={this.close} closeIcon>
          <Modal.Header>새 사이즈 카드 등록</Modal.Header>
          <Modal.Content>
            <LabelInput
              label="이름"
              onChange={e => this.setState({ sizeName: e.target.value })}
            />
            <LabelInput
              label="어깨너비"
              type="number"
              onChange={e => this.setState({ shoulderWidth: e.target.value })}
              dropdownLabel={
                <Dropdown
                  onChange={this.onChangeShoulderMeasure}
                  defaultValue={2}
                  options={measure}
                />
              }
            />
            <LabelInput
              label="가슴둘레"
              type="number"
              onChange={e => this.setState({ chestLength: e.target.value })}
              dropdownLabel={
                <Dropdown
                  onChange={this.onChangeChestMeasure}
                  defaultValue={2}
                  options={measure}
                />
              }
            />
            <LabelInput
              label="팔 길이"
              type="number"
              onChange={e => this.setState({ armLength: e.target.value })}
              dropdownLabel={
                <Dropdown
                  onChange={this.onChangeArmMeasure}
                  defaultValue={2}
                  options={measure}
                />
              }
            />
            <LabelInput
              label="총 기장"
              type="number"
              onChange={e => this.setState({ totalLength: e.target.value })}
              dropdownLabel={
                <Dropdown
                  onChange={this.onChangeTotalMeasure}
                  defaultValue={2}
                  options={measure}
                />
              }
            />
            <LabelInput
              label="재고"
              type="number"
              onChange={e => this.setState({ quantity: e.target.value })}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.onClickAdd}
              basic
              color="grey"
              content="등록"
            />
          </Modal.Actions>
        </Modal>
        <NavigationHeader rightButtonText="등록하기" headerTitle="새상품등록" />
        <Content>
          {sizeList.map((size, index) => (
            <SizeUpload
              onClick={this.onClickSize({ size, index })}
              key={size.id}
            />
          ))}
        </Content>
      </Container>
    );
  }
}

ItemCreateSizePage.propTypes = {
  // pushUrl: PropTypes.func,
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
  // match: PropTypes.object,
  // postItemSize: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  postItemSize: ({ sizeObject }) =>
    dispatch(postItemSizeAction({ sizeObject })),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'itemCreateSize', reducer });
const withSaga = injectSaga({ key: 'itemCreateSize', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemCreateSizePage);
