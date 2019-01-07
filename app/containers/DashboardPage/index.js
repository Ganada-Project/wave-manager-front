/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push, replace } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectIdToken } from '../App/selectors';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class DashboardPage extends React.PureComponent {
  componentDidMount() {
    const { idToken, replaceUrl } = this.props;
    if (!idToken) {
      replaceUrl('/signIn');
    }
  }

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
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
  // pushUrl: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});

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
