/**
 * Gets the repositories of the user from Github
 */

import { call, put, all, takeLatest } from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { getUserInfoSaga } from '../App/saga';
import {
  POST_LOGIN_FAIL,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
} from './constants';
import { API_URL } from '../../constants';

export function* postSignInSaga(action) {
  const url = `${API_URL}/auth/login/brand`;
  const { email, password } = action;
  const payload = { email, password };
  try {
    const result = yield call(postRequest, { url, payload });
    yield put({ type: POST_LOGIN_SUCCESS });
    yield localStorage.setItem('wm.idToken', result.token);
    yield getUserInfoSaga({ idToken: result.token });
    yield put(push('/dashboard'));
  } catch (err) {
    yield put({ type: POST_LOGIN_FAIL });
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
  yield all([takeLatest(POST_LOGIN_REQUEST, postSignInSaga)]);
}
