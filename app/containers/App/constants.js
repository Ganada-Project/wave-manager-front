/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_USER_INFO_REQUEST = 'wm/App/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'wm/App/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'wm/App/GET_USER_INFO_FAIL';

export const SIGN_OUT = 'wm/App/SIGN_OUT';
