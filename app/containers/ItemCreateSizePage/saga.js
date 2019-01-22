import { call, put, takeLatest, all } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import { postRequest } from 'utils/request';
import { API_URL } from '../../constants';

import {
  POST_ITEM_SIZE_FAIL,
  POST_ITEM_SIZE_REQUEST,
  POST_ITEM_SIZE_SUCCESS,
} from './constants';

export function* postItemSizeSaga({ sizeObject }) {
  const url = `${API_URL}/category/category1`;
  const payload = sizeObject;
  try {
    const result = yield call(postRequest, { url, payload });
    yield put({ type: POST_ITEM_SIZE_SUCCESS, size: result });
  } catch (error) {
    yield put({ type: POST_ITEM_SIZE_FAIL });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([takeLatest(POST_ITEM_SIZE_REQUEST, postItemSizeSaga)]);
}
