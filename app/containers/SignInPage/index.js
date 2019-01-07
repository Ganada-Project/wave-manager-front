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
import { replace } from 'connected-react-router';
import { Link } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectIdToken } from 'containers/App/selectors';

import { Header, Input, RoundButton } from '../../components';
import messages from './messages';
import {
  Container,
  Content,
  LeftCol,
  RightCol,
  MainTitle,
  CoverImg,
  ButtonArea,
} from './styles';
import reducer from './reducer';
import saga from './saga';
import { postSignInAction } from './actions';
import SignInCover from './signin_cover.jpg';

/* eslint-disable react/prefer-stateless-function */
class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    const { idToken, replaceUrl } = this.props;
    if (idToken) {
      replaceUrl('/dashboard');
    }
  }

  onClickSignIn = () => {
    const { email, password } = this.state;
    const { onClickSignIn } = this.props;
    onClickSignIn({ email, password });
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
        <Content>
          <LeftCol>
            <CoverImg src={SignInCover} alt="sign_in_cover" />
          </LeftCol>
          <RightCol>
            <MainTitle>
              <FormattedMessage {...messages.mainTitle} />
            </MainTitle>
            <Input
              placeholder="이메일"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              placeholder="비밀번호"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <ButtonArea>
              <RoundButton onClick={this.onClickSignIn}>로그인</RoundButton>
              <Link to="/signUp">
                <div>계정생성</div>
              </Link>
            </ButtonArea>
          </RightCol>
        </Content>
      </Container>
    );
  }
}

SignInPage.propTypes = {
  onClickSignIn: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  onClickSignIn: ({ email, password }) =>
    dispatch(postSignInAction({ email, password })),
});

const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});

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
