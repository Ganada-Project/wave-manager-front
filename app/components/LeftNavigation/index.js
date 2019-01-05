import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Wrapper, Header, Body, MenuList } from './styles';

class LeftNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Body>
          <MenuList>홈</MenuList>
          <MenuList>판매</MenuList>
          <MenuList>상품</MenuList>
          <MenuList>고객</MenuList>
          <MenuList>광고 활동</MenuList>
          <MenuList>등급</MenuList>
        </Body>
      </Wrapper>
    );
  }
}

export default LeftNavigation;
