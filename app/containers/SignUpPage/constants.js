/*
 * SignInConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const POST_VERIFY_NUMBER_REQUEST =
  'wm/SignUp/POST_VERIFY_NUMBER_REQUEST';
export const POST_VERIFY_NUMBER_SUCCESS =
  'wm/SignUp/POST_VERIFY_NUMBER_SUCCESS';
export const POST_VERIFY_NUMBER_FAIL = 'wm/SignUp/POST_VERIFY_NUMBER_FAIL';

export const POST_SIGNUP_REQUEST = 'wm/SignUp/POST_SIGNUP_REQUEST';
export const POST_SIGNUP_SUCCESS = 'wm/SignUp/POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAIL = 'wm/SignUp/POST_SIGNUP_FAIL';
