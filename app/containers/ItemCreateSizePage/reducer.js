/*
 * itemCreateReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  POST_ITEM_SIZE_FAIL,
  POST_ITEM_SIZE_REQUEST,
  POST_ITEM_SIZE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  size: '',
  sizeUploading: false,
});

function itemCreateSizeReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ITEM_SIZE_REQUEST:
      return state.set('sizeUploading', true);
    case POST_ITEM_SIZE_SUCCESS:
      return state.set('sizeUploading', false).set('size', action.payload.size);
    case POST_ITEM_SIZE_FAIL:
      return state.set('sizeUploading', false);
    default:
      return state;
  }
}

export default itemCreateSizeReducer;
