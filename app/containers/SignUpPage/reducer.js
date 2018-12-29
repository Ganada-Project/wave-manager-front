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
  POST_SIGNUP_FAIL,
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  GET_STYLES_FAIL,
  GET_STYLES_REQUEST,
  GET_STYLES_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  styles: [],
  stylesLoading: false,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STYLES_REQUEST:
      return state.set('stylesLoading', true);
    case GET_STYLES_SUCCESS:
      return state
        .set('stylesLoading', false)
        .set('styles', List(action.styles));
    case GET_STYLES_FAIL:
      return state.set('stylesLoading', false);
    default:
      return state;
  }
}

export default signUpReducer;
