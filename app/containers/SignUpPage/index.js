/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { List } from 'immutable';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { push, replace } from 'connected-react-router';

import { Header, Input, RoundButton } from '../../components';
// import messages from './messages';
import {
  Container,
  Content,
  Row,
  RowBody,
  RowFooter,
  StyleBox,
  StyleImage,
  StyleOverlay,
  StyleText,
  SellRadio,
  MarketingRadio,
} from './styles';
import './styles.css';
import {
  postVerifyNumberAction,
  getStylesAction,
  postSignUpAction,
} from './actions';
import { makeSelectStyles } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIdToken } from '../App/selectors';

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
      selectedStyles: [],
      email: '',
      password: '',
      password2: '',
      isOnlineSell: true,
      isMarketing: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.styles.size === 0 && nextProps.styles.size !== 0) {
      return { styles: [...nextProps.styles] };
    }
    return null;
  }

  componentDidMount() {
    const { getStyles, idToken, replaceUrl } = this.props;
    getStyles();
    if (idToken) {
      replaceUrl('/dashboard');
    }
  }

  routeToVerify = () => {
    // const { postVerifyNumber, getStyles } = this.props;
    // const { number } = this.state;
    // postVerifyNumber({ number });
    // getStyles();
    this.setState({ currentRoute: 'getVerify' });
  };

  routeToBrandInfo = () => {
    // const { verifyNumber } = this.state;
    this.setState({ currentRoute: 'getBrandInfo' });
  };

  routeToStyle = () => {
    // const { brandName, brandRegNum } = this.state;
    this.setState({ currentRoute: 'getBrandStyle' });
  };

  routeToBrandAuth = () => {
    // const { styles } = this.state;
    this.setState({ currentRoute: 'getBrandAuth' });
  };

  onClickSignUp = () => {
    const {
      brandName,
      brandRegNum,
      email,
      number,
      password,
      selectedStyles,
      isOnlineSell,
      isMarketing,
    } = this.state;
    const { onClickSignUp } = this.props;
    const stylesId = selectedStyles.map(style => style.id);
    console.log('BrandName :', brandName);
    console.log('BrandRegNum: ', brandRegNum);
    console.log('email: ', email);
    console.log('number: ', number);
    console.log('password ', password);
    console.log('styles :', stylesId);
    console.log('isOnlineSell: ', isOnlineSell);

    onClickSignUp({
      email,
      number,
      password,
      isOnlineSell,
      brandName,
      brandRegNum,
      stylesList: stylesId,
      isMarketing,
    });
    // this.props.push('/dashboard');
  };

  handleStyle = (index, style) => () => {
    const { selectedStyles, styles } = this.state;
    const newStyles = [...styles];
    const newSelectedStyles = [...selectedStyles];
    if (!style.clicked) {
      newSelectedStyles.push(style);
      newStyles[index].clicked = true;
    } else {
      const targetIndex = newSelectedStyles.findIndex(x => x.id === style.id);
      newSelectedStyles.splice(targetIndex, 1);
      newStyles[index].clicked = false;
    }

    this.setState({ styles: newStyles, selectedStyles: newSelectedStyles });
  };

  handleStyleCancel = style => () => {
    const { selectedStyles, styles } = this.state;
    const newSelectedStyles = [...selectedStyles];
    const newStyles = [...styles];
    const targetIndex = newSelectedStyles.findIndex(x => x.id === style.id);
    const styleTargetIndex = newStyles.findIndex(x => x.id === style.id);
    styles[styleTargetIndex].clicked = false;
    newSelectedStyles.splice(targetIndex, 1);
    this.setState({ styles: newStyles, selectedStyles: newSelectedStyles });
  };

  handleRadio = (e, data) => {
    this.setState({ isOnlineSell: data.checked });
  };

  handleMarketing = (e, data) => {
    this.setState({ isMarketing: data.checked });
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
      selectedStyles,
      isOnlineSell,
      isMarketing,
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
            <SellRadio
              toggle
              onChange={this.handleRadio}
              checked={isOnlineSell}
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
              {styles.map((style, index) => (
                <StyleBox
                  key={style.id}
                  onClick={this.handleStyle(index, style)}
                >
                  <StyleOverlay clicked={style.clicked}>
                    {style.clicked ? (
                      <StyleText>체크</StyleText>
                    ) : (
                      <StyleText>{style.name}</StyleText>
                    )}
                  </StyleOverlay>
                  <StyleImage src={style.image_url} alt={style.id} />
                </StyleBox>
              ))}
            </RowBody>
            <RowFooter>
              {selectedStyles.map((style, index) => (
                <div key={`selectedStyle-${style.id}`}>
                  <p>{`${index + 1}.${style.name}`}</p>
                  <button type="button" onClick={this.handleStyleCancel(style)}>
                    취소
                  </button>
                </div>
              ))}
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
              value={email}
              placeholder="이메일"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              key="password"
              value={password}
              placeholder="비밀번호"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Input
              key="password2"
              value={password2}
              placeholder="비밀번호 확인"
              onChange={e => this.setState({ password2: e.target.value })}
            />
            <MarketingRadio
              toggle
              checked={isMarketing}
              onChange={this.handleMarketing}
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
  // postVerifyNumber: PropTypes.func,
  getStyles: PropTypes.func,
  // push: PropTypes.func,
  onClickSignUp: PropTypes.func,
  replaceUrl: PropTypes.func,
  idToken: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  postVerifyNumber: ({ number }) =>
    dispatch(postVerifyNumberAction({ number })),
  getStyles: () => dispatch(getStylesAction()),
  push: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
  onClickSignUp: ({
    email,
    password,
    number,
    brandName,
    brandRegNum,
    stylesList,
    isOnlineSell,
    isMarketing,
  }) =>
    dispatch(
      postSignUpAction({
        email,
        password,
        number,
        brandName,
        brandRegNum,
        stylesList,
        isOnlineSell,
        isMarketing,
      }),
    ),
});

const mapStateToProps = createStructuredSelector({
  styles: makeSelectStyles(),
  idToken: makeSelectIdToken(),
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
