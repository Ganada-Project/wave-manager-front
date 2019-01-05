/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {

// } from 'containers/App/selectors';

import { LeftNavigation } from '../../components';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class ItemPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <LeftNavigation />
        <Helmet>
          <title>대시보드</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Content>대시보드</Content>
      </Container>
    );
  }
}

ItemPage.propTypes = {};

// const mapDispatchToProps = dispatch => ({});
const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'item', reducer });
const withSaga = injectSaga({ key: 'item', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemPage);
