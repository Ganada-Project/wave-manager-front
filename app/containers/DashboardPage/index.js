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
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class DashboardPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Container>
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

DashboardPage.propTypes = {
  // pushUrl: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
});
const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
