/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, List } from 'immutable';

import {
  GET_CATEGORY_1_REQUEST,
  GET_CATEGORY_1_FAIL,
  GET_CATEGORY_1_SUCCESS,
  GET_CATEGORY_2_REQUEST,
  GET_CATEGORY_2_SUCCESS,
  GET_CATEGORY_2_FAIL,
  GET_CATEGORY_3_REQUEST,
  GET_CATEGORY_3_SUCCESS,
  GET_CATEGORY_3_FAIL,
  GET_OTHER_FEATURES_FAIL,
  GET_OTHER_FEATURES_REQUEST,
  GET_OTHER_FEATURES_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  category1Loading: false,
  category2Loading: false,
  category3Loading: false,
  otherFeaturesLoading: false,
  category1: [],
  category2: [],
  category3: [],
  elasticity: [],
  opacity: [],
  lining: [],
  thickness: [],
  texture: [],
  quality: [],
  season: [],
});

function itemCreateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_1_REQUEST:
      return state.set('category1Loading', true);
    case GET_CATEGORY_1_SUCCESS:
      return state
        .set('category1Loading', false)
        .set('category1', List(action.category1));
    case GET_CATEGORY_1_FAIL:
      return state.set('category1Loading', false);
    case GET_CATEGORY_2_REQUEST:
      return state.set('category2Loading', true);
    case GET_CATEGORY_2_SUCCESS:
      return state
        .set('category2Loading', false)
        .set('category2', List(action.category2));
    case GET_CATEGORY_2_FAIL:
      return state.set('category3Loading', false);
    case GET_CATEGORY_3_REQUEST:
      return state.set('category3Loading', true);
    case GET_CATEGORY_3_SUCCESS:
      return state
        .set('category3Loading', false)
        .set('category3', List(action.category3));
    case GET_CATEGORY_3_FAIL:
      return state.set('category3Loading', false);
    case GET_OTHER_FEATURES_REQUEST:
      return state.set('otherFeaturesLoading', true);
    case GET_OTHER_FEATURES_SUCCESS:
      return state
        .set('otherFeaturesLoading', false)
        .set('elasticity', List(action.elasticity))
        .set('opacity', List(action.opacity))
        .set('lining', List(action.lining))
        .set('thickness', List(action.thickness))
        .set('texture', List(action.texture))
        .set('quality', List(action.quality))
        .set('season', List(action.season));
    case GET_OTHER_FEATURES_FAIL:
      return state.set('otherFeaturesLoading', false);

    default:
      return state;
  }
}

export default itemCreateReducer;
