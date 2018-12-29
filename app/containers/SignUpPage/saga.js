/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { API_URL } from '../../constants';

import {
  POST_VERIFY_NUMBER_FAIL,
  POST_VERIFY_NUMBER_SUCCESS,
  POST_VERIFY_NUMBER_REQUEST,
  GET_STYLES_FAIL,
  GET_STYLES_REQUEST,
  GET_STYLES_SUCCESS,
} from './constants';

export function* postVerifyNumberSaga(action) {
  const { number } = action;
  const url = `${API_URL}api/auth/phone?phone=${number}`;

  try {
    const result = yield call(request, { url, method: 'GET' });
    yield put({ type: POST_VERIFY_NUMBER_SUCCESS, number: result.result });
  } catch (err) {
    yield put({ type: POST_VERIFY_NUMBER_FAIL });
  }
}
export function* getStylesSaga() {
  const url = `${API_URL}api/style`;

  try {
    const result = yield call(request, { url, method: 'GET' });
    const styles = result.result.map(style => ({ ...style, clicked: false }));
    yield put({ type: GET_STYLES_SUCCESS, styles });
  } catch (err) {
    yield put({ type: GET_STYLES_FAIL });
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
}
