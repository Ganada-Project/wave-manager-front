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
import { Container, Content, Col, MainTitle } from './styles';
import reducer from './reducer';
import saga from './saga';
import WaveApp from './wave-app.gif';

/* eslint-disable react/prefer-stateless-function */
export class SignInPage extends React.PureComponent {
  componentDidMount() {}

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
        <Content>
          <Col>사진</Col>
          <Col>
            <MainTitle>
              <FormattedMessage {...messages.mainTitle} />
            </MainTitle>
            <div>계정생성</div>
          </Col>
        </Content>
      </Container>
    );
  }
}

SignInPage.propTypes = {};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignInPage);
