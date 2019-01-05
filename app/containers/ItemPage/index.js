/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {

// } from 'containers/App/selectors';

import { RoundButton } from '../../components';

import { Container, Content } from './styles';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIdToken } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
class ItemPage extends React.PureComponent {
  componentDidMount() {
    const { replaceUrl, idToken } = this.props;
    if (!idToken) {
      replaceUrl('/signIn');
    }
  }

  routeToItemCreate = () => {
    const { pushUrl } = this.props;
    pushUrl(`${this.props.match.path}/create`);
  };

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
        <Content>
          <RoundButton onClick={this.routeToItemCreate}>상품등록</RoundButton>
          아이템보드
        </Content>
      </Container>
    );
  }
}

ItemPage.propTypes = {
  pushUrl: PropTypes.func,
  idToken: PropTypes.string,
  replaceUrl: PropTypes.func,
  match: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  // pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'item', reducer });
const withSaga = injectSaga({ key: 'item', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemPage);
