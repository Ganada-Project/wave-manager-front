/**
 * CodingPlayground 관련 saga
 */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import { replace } from 'connected-react-router';

import {
  GET_USER_INFO_FAIL,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  SIGN_OUT,
} from './constants';

import { API_URL } from '../../constants';

export function* getUserInfoSaga(action) {
  const { idToken } = action;
  const url = `${API_URL}/user`;

  try {
    const result = yield call(getRequest, { url });
    yield put({
      type: GET_USER_INFO_SUCCESS,
      user: result.result,
      token: idToken,
    });
  } catch (error) {
    yield put({
      type: GET_USER_INFO_FAIL,
      error: error.response,
    });
  }
}

export function* signOutSaga() {
  yield put(replace('/'));
}

export default function* rootSaga() {
  yield all([takeLatest(GET_USER_INFO_REQUEST, getUserInfoSaga)]);
  yield all([takeLatest(SIGN_OUT, signOutSaga)]);
}
