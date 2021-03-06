/*
 * Sign Up Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  POST_VERIFY_NUMBER_REQUEST,
  GET_STYLES_REQUEST,
  POST_SIGNUP_REQUEST,
} from './constants';

/**
 * Phone Number Action
 *
 * @param  {number}
 *
 * @return {object}
 */
export function postVerifyNumberAction({ number }) {
  return {
    type: POST_VERIFY_NUMBER_REQUEST,
    number,
  };
}

/**
 * Styles Action
 *
 * @return {object}
 */
export function getStylesAction() {
  return {
    type: GET_STYLES_REQUEST,
  };
}

/**
 * Post SignUp Action
 *
 * @return {object}
 */
export function postSignUpAction({
  email,
  password,
  number,
  brandName,
  brandRegNum,
  stylesList,
  isOnlineSell,
  isMarketing,
}) {
  return {
    type: POST_SIGNUP_REQUEST,
    email,
    password,
    number,
    brandName,
    brandRegNum,
    stylesList,
    isOnlineSell,
    isMarketing,
  };
}
