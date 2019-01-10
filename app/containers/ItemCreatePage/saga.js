import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import {
  GET_CATEGORY_1_REQUEST,
  GET_CATEGORY_2_REQUEST,
  GET_CATEGORY_3_REQUEST,
  GET_CATEGORY_1_SUCCESS,
  GET_CATEGORY_2_SUCCESS,
  GET_CATEGORY_3_SUCCESS,
  GET_CATEGORY_1_FAIL,
  GET_CATEGORY_2_FAIL,
  GET_CATEGORY_3_FAIL,
  GET_OTHER_FEATURES_FAIL,
  GET_OTHER_FEATURES_REQUEST,
  GET_OTHER_FEATURES_SUCCESS,
  GET_STYLES_FAIL,
  GET_STYLES_REQUEST,
  GET_STYLES_SUCCESS,
} from './constants';
import { API_URL } from '../../constants';

export function* getCategory1Saga() {
  const url = `${API_URL}/category/category1`;
  try {
    const result = yield call(getRequest, { url });
    yield put({ type: GET_CATEGORY_1_SUCCESS, category1: result.category1 });
    yield put({ type: GET_OTHER_FEATURES_REQUEST });
    yield put({ type: GET_STYLES_REQUEST });
  } catch (error) {
    yield put({ type: GET_CATEGORY_1_FAIL });
  }
}

export function* getCategory2Saga(action) {
  const { category1Id } = action;
  const url = `${API_URL}/category/category2/${category1Id}`;

  try {
    const result = yield call(getRequest, { url });
    yield put({ type: GET_CATEGORY_2_SUCCESS, category2: result.category2 });
  } catch (error) {
    yield put({ type: GET_CATEGORY_2_FAIL });
  }
}

export function* getCategory3Saga(action) {
  const { category2Id } = action;
  const url = `${API_URL}/category/category3/${category2Id}`;

  try {
    const result = yield call(getRequest, { url });
    yield put({ type: GET_CATEGORY_3_SUCCESS, category3: result.category3 });
  } catch (error) {
    yield put({ type: GET_CATEGORY_3_FAIL });
  }
}

export function* getOtherFeaturesSaga() {
  const url = `${API_URL}/feature`;

  try {
    const result = yield call(getRequest, { url });
    yield put({
      type: GET_OTHER_FEATURES_SUCCESS,
      elasticity: result.elasticity,
      lining: result.lining,
      thickness: result.thickness,
      texture: result.texture,
      quality: result.quality,
      opacity: result.opacity,
      season: result.season,
    });
  } catch (error) {
    yield put({ type: GET_OTHER_FEATURES_FAIL });
  }
}

export function* getStylesSaga() {
  const url = `${API_URL}/style`;
  try {
    const result = yield call(getRequest, { url });
    yield put({ type: GET_STYLES_SUCCESS, styles: result.result });
  } catch (err) {
    yield put({ type: GET_STYLES_FAIL });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(GET_CATEGORY_1_REQUEST, getCategory1Saga)]);
  yield all([takeLatest(GET_CATEGORY_2_REQUEST, getCategory2Saga)]);
  yield all([takeLatest(GET_CATEGORY_3_REQUEST, getCategory3Saga)]);
  yield all([takeLatest(GET_STYLES_REQUEST, getStylesSaga)]);
  yield all([takeLatest(GET_OTHER_FEATURES_REQUEST, getOtherFeaturesSaga)]);
}
