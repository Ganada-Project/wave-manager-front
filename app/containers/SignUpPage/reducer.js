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
import { fromJS } from 'immutable';

import {
  POST_SIGNUP_FAIL,
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  styles: '',
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case POST_SIGNUP_REQUEST:
      // Delete prefixed '@' from the github username
      return state.set('styles', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default signUpReducer;
