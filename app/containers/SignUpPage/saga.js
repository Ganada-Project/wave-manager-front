/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest, postRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { API_URL } from '../../constants';

import {
  POST_VERIFY_NUMBER_FAIL,
  POST_VERIFY_NUMBER_SUCCESS,
  POST_VERIFY_NUMBER_REQUEST,
  GET_STYLES_FAIL,
  GET_STYLES_REQUEST,
  GET_STYLES_SUCCESS,
  POST_SIGNUP_FAIL,
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
} from './constants';

export function* postVerifyNumberSaga(action) {
  const { number } = action;
  const url = `${API_URL}api/auth/phone?phone=${number}`;
  try {
    const result = yield call(getRequest, { url });
    yield put({ type: POST_VERIFY_NUMBER_SUCCESS, number: result.result });
  } catch (err) {
    yield put({ type: POST_VERIFY_NUMBER_FAIL });
  }
}

export function* getStylesSaga() {
  const url = `${API_URL}/style`;
  try {
    const result = yield call(getRequest, { url });
    const styles = result.result.map(style => ({ ...style, clicked: false }));
    yield put({ type: GET_STYLES_SUCCESS, styles });
  } catch (err) {
    yield put({ type: GET_STYLES_FAIL });
  }
}

export function* postSignUpSaga(action) {
  const url = `${API_URL}/auth/register/brand`;
  const {
    email,
    password,
    number,
    // isOnlineSell,
    isMarketing,
    brandName,
    brandRegNum,
    stylesList,
  } = action;
  const payload = {
    email,
    password,
    business_number: brandRegNum,
    brand_name: brandName,
    phone: number,
    styles: stylesList,
    marketing: isMarketing ? 1 : 0,
  };
  try {
    const result = yield call(postRequest, { url, payload });
    yield put({ type: POST_SIGNUP_SUCCESS, token: result.token });
    yield localStorage.setItem('wm.idToken', result.token);
    yield put(push('/dashboard'));
  } catch (err) {
    yield put({ type: POST_SIGNUP_FAIL });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(POST_VERIFY_NUMBER_REQUEST, postVerifyNumberSaga);
  yield takeLatest(GET_STYLES_REQUEST, getStylesSaga);
  yield takeLatest(POST_SIGNUP_REQUEST, postSignUpSaga);
}
