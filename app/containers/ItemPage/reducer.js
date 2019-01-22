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
  GET_ITEMS_REQUEST,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  itemList: [],
  itemListLoading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return state.set('itemListLoading', true);
    case GET_ITEMS_SUCCESS:
      return state
        .set('itemList', List(action.itemList))
        .set('itemListLoading', false);
    case GET_ITEMS_FAIL:
      return state.set('itemListLoading', false);

    default:
      return state;
  }
}

export default homeReducer;
