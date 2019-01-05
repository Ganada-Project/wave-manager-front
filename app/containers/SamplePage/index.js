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
// import { makeSelectIdToken } from 'containers/App/selectors';
import { Header } from '../../components';
import messages from './messages';
import { Container, Content, Col, MainTitle } from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class SamplePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Helmet>
          <title>웨이브 브랜드</title>
          <meta
            name="description"
            content="A React.js Boilerplate application SamplePage"
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
        </Content>
      </Container>
    );
  }
}

SamplePage.propTypes = {};

// const mapDispatchToProps = dispatch => ({});
const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'sample', reducer });
const withSaga = injectSaga({ key: 'sample', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SamplePage);
