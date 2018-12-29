/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { is, List } from 'immutable';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Header, Input, RoundButton } from '../../components';
// import messages from './messages';
import {
  Container,
  Content,
  Row,
  RowBody,
  RowFooter,
  MainTitle,
  StyleBox,
  StyleImage,
  StyleOverlay,
  StyleText,
} from './styles';
import { postVerifyNumberAction, getStylesAction } from './actions';
import { makeSelectStyles } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */

class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: 'getPhone',
      number: '',
      verifyNumber: '',
      brandName: '',
      brandRegNum: '',
      styles: List([]),
      email: '',
      password: '',
      password2: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.styles.size === 0 && nextProps.styles.size !== 0) {
      return { styles: [...nextProps.styles] };
    }
    return null;
  }

  componentDidMount() {
    const { getStyles } = this.props;
    getStyles();
  }

  routeToVerify = () => {
    const { postVerifyNumber, getStyles } = this.props;
    const { number } = this.state;
    // postVerifyNumber({ number });
    // getStyles();
    this.setState({ currentRoute: 'getVerify' });
  };

  routeToBrandInfo = () => {
    const { verifyNumber } = this.state;
    this.setState({ currentRoute: 'getBrandInfo' });
  };

  routeToStyle = () => {
    const { brandName, brandRegNum } = this.state;
    this.setState({ currentRoute: 'getBrandStyle' });
  };

  routeToBrandAuth = () => {
    const { styles } = this.state;
    this.setState({ currentRoute: 'getBrandAuth' });
  };

  onClickSignUp = () => {
    const {
      brandName,
      brandRegNum,
      email,
      number,
      password,
      styles,
      password2,
    } = this.state;
    console.log(brandName);
    console.log(brandRegNum);
    console.log(email);
    console.log(password);
    console.log(number);
  };

  renderRoute = () => {
    // const { styles } = this.props;
    const {
      number,
      verifyNumber,
      brandName,
      brandRegNum,
      email,
      password,
      password2,
      currentRoute,
      styles,
    } = this.state;
    switch (currentRoute) {
      case 'getPhone':
        return (
          <Row>
            휴대폰 인증
            <Input
              key="number"
              placeholder="휴대폰 번호를 입력해주세요"
              value={number}
              onChange={e => this.setState({ number: e.target.value })}
            />
            <RowFooter>
              <RoundButton type="button" onClick={this.routeToVerify}>
                인증 번호 받기
              </RoundButton>
            </RowFooter>
          </Row>
        );
      case 'getVerify':
        return (
          <Row>
            인증 번호를 입력해주세요
            <Input
              key="verifyNumber"
              placeholder="인증번호를 입력해주세요"
              value={verifyNumber}
              onChange={e => this.setState({ verifyNumber: e.target.value })}
            />
            <RowFooter>
              <RoundButton type="button" onClick={this.routeToBrandInfo}>
                다음
              </RoundButton>
            </RowFooter>
          </Row>
        );
      case 'getBrandInfo':
        return (
          <Row>
            브랜드 계정 생성
            <Input
              key="brandName"
              placeholder="브랜드명"
              value={brandName}
              onChange={e => this.setState({ brandName: e.target.value })}
            />
            <Input
              key="brandRegNum"
              value={brandRegNum}
              placeholder="사업자 번호를 입력해주세요"
              onChange={e => this.setState({ brandRegNum: e.target.value })}
            />
            <RowFooter>
              <RoundButton type="button" onClick={this.routeToStyle}>
                다음
              </RoundButton>
            </RowFooter>
          </Row>
        );
      case 'getBrandStyle':
        return (
          <Row>
            브랜드 스타일
            <RowBody>
              {styles.map(style => (
                <StyleBox key={style.id}>
                  <StyleOverlay>
                    <StyleText>{style.name}</StyleText>
                  </StyleOverlay>
                  <StyleImage src={style.image_url} alt={style.id} />
                </StyleBox>
              ))}
            </RowBody>
            <RowFooter>
              <RoundButton type="button" onClick={this.routeToBrandAuth}>
                다음
              </RoundButton>
            </RowFooter>
          </Row>
        );
      case 'getBrandAuth':
        return (
          <Row>
            브랜드 로그인 정보
            <Input
              key="email"
              placeholder="이메일"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              key="password"
              placeholder="비밀번호"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Input
              key="password2"
              placeholder="비밀번호 확인"
              onChange={e => this.setState({ password2: e.target.value })}
            />
            <RowFooter>
              <RoundButton type="button" onClick={this.onClickSignUp}>
                가입하기
              </RoundButton>
            </RowFooter>
          </Row>
        );
      default:
        return <div />;
    }
  };

  render() {
    return (
      <Container>
        <Helmet>
          <title>회원가입</title>
          <meta
            name="description"
            content="A React.js Boilerplate application SignInPage"
          />
        </Helmet>
        <Header isAuth />
        <Content>{this.renderRoute()}</Content>
      </Container>
    );
  }
}

SignUpPage.propTypes = {
  postVerifyNumber: PropTypes.func,
  getStyles: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  postVerifyNumber: ({ number }) =>
    dispatch(postVerifyNumberAction({ number })),
  getStyles: () => dispatch(getStylesAction()),
});

const mapStateToProps = createStructuredSelector({
  styles: makeSelectStyles(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
