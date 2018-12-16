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

export const POST_LOGIN_REQUEST = 'wm/SignIn/POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'wm/SignIn/POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAIL = 'wm/SignIn/POST_LOGIN_FAIL';
