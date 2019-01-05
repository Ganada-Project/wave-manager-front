/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { replace } from 'connected-react-router';

// redux things
import { connect } from 'react-redux';
import { compose } from 'redux';
// import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage';
import SignInPage from 'containers/SignInPage';
import SignUpPage from 'containers/SignUpPage';
import DashboardPage from 'containers/DashboardPage';
import NotFoundPage from 'containers/NotFoundPage';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import { makeSelectIdToken } from './selectors';

const AppWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { idToken, replaceUrl } = this.props;
    console.log(idToken);
    if (idToken) {
      replaceUrl('/dashboard');
    }
  }

  render() {
    return (
      <AppWrapper>
        <Helmet defaultTitle="웨이브 브랜드">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/signUp" component={SignUpPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    replaceUrl: nextUrl => {
      dispatch(replace(nextUrl));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
// const withSaga = injectSaga({ key: 'app', saga, });
export default compose(
  withRouter,
  // withSaga,
  withConnect,
)(App);
