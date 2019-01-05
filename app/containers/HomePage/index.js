/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
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
class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Helmet>
          <title>웨이브 브랜드</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Header />
        <Content>
          <Col>
            <MainTitle>
              <FormattedMessage {...messages.mainTitle} />
            </MainTitle>
            <MainTitle>
              <FormattedMessage {...messages.subTitle} />
            </MainTitle>
          </Col>
          <Col>
            <img alt="home_wave_app" src={WaveApp} width={350} />
          </Col>
        </Content>
      </Container>
    );
  }
}

HomePage.propTypes = {};

// const mapDispatchToProps = dispatch => ({});
const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
