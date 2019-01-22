import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import { API_URL } from '../../constants';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
} from './constants';

export function* getItemListSaga() {
  const url = `${API_URL}/item/35`;
  try {
    const result = yield call(getRequest, { url });
    console.log(result);
    yield put({ type: GET_ITEMS_SUCCESS, itemList: result });
  } catch (error) {
    yield put({ type: GET_ITEMS_FAIL });
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
  yield all([takeLatest(GET_ITEMS_REQUEST, getItemListSaga)]);
}
