/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignInPage from 'containers/SignInPage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

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

export default function App() {
  return (
    <AppWrapper>
      <Helmet defaultTitle="웨이브 브랜드">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
