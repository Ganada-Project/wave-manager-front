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

export function* getUserInfoSaga({ idToken }) {
  const url = `${API_URL}/user`;

  try {
    if (idToken) {
      const result = yield call(getRequest, { url });
      yield put({
        type: GET_USER_INFO_SUCCESS,
        user: result.result,
        token: localStorage.getItem('wm.idToken') || idToken,
      });
    } else {
      yield put(replace('/signIn'));
    }
  } catch (error) {
    yield put({
      type: GET_USER_INFO_FAIL,
      error: error.response,
    });
  }
}

export function* signOutSaga() {
  yield localStorage.removeItem('wm.idToken');
  yield put(replace('/'));
}

export default function* rootSaga() {
  yield all([takeLatest(GET_USER_INFO_REQUEST, getUserInfoSaga)]);
  yield all([takeLatest(SIGN_OUT, signOutSaga)]);
}
