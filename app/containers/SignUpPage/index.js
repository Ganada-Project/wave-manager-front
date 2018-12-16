/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Header } from '../../components';
import messages from './messages';
import { Container, Content, Row, MainTitle } from './styles';
import { postVerifyNumberAction } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */

class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: 'getPhone',
    };
  }

  componentDidMount() {}

  routeToVerify = () => {
    this.setState({ currentRoute: 'getVerify' });
  };

  routeToBrandInfo = () => {
    this.setState({ currentRoute: 'getBrandInfo' });
  };

  renderRoute = () => {
    const { currentRoute } = this.state;
    switch (currentRoute) {
      case 'getPhone':
        return (
          <Row>
            휴대폰 인증
            <button type="button" onClick={this.routeToVerify}>
              인증 번호 받기
            </button>
          </Row>
        );
      case 'getVerify':
        return (
          <Row>
            인증 번호를 입력해주세요
            <button type="button" onClick={this.routeToBrandInfo}>
              다음
            </button>
          </Row>
        );
      case 'getBrandInfo':
        return (
          <Row>
            브랜드명 사업자 등록번호
            <button type="button" onClick={this.routeToVerify}>
              다음
            </button>
          </Row>
        );
      default:
        return <div />;
    }
  };

  render() {
    return (
      <Container>
        <Helmet>
          <title>로그인</title>
          <meta
            name="description"
            content="A React.js Boilerplate application SignInPage"
          />
        </Helmet>
        <Header isAuth />
        <Content>{this.renderRoute()}</Content>
      </Container>
    );
  }
}

SignUpPage.propTypes = {};

const mapDispatchToProps = dispatch => ({
  postVerifyNumber: ({ number }) =>
    dispatch(postVerifyNumberAction({ number })),
});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
