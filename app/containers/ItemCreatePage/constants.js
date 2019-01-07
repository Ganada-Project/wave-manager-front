/*
 * ItemCreateConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_CATEGORY_1_REQUEST = 'wm/ItemCreate/GET_CATEGORY_1_REQUEST';
export const GET_CATEGORY_1_SUCCESS = 'wm/ItemCreate/GET_CATEGORY_1_SUCCESS';
export const GET_CATEGORY_1_FAIL = 'wm/ItemCreate/GET_CATEGORY_1_FAIL';

export const GET_CATEGORY_2_REQUEST = 'wm/ItemCreate/GET_CATEGORY_2_REQUEST';
export const GET_CATEGORY_2_SUCCESS = 'wm/ItemCreate/GET_CATEGORY_2_SUCCESS';
export const GET_CATEGORY_2_FAIL = 'wm/ItemCreate/GET_CATEGORY_2_FAIL';

export const GET_CATEGORY_3_REQUEST = 'wm/ItemCreate/GET_CATEGORY_3_REQUEST';
export const GET_CATEGORY_3_SUCCESS = 'wm/ItemCreate/GET_CATEGORY_3_SUCCESS';
export const GET_CATEGORY_3_FAIL = 'wm/ItemCreate/GET_CATEGORY_3_FAIL';

export const GET_OTHER_FEATURES_REQUEST =
  'wm/ItemCreate/GET_OTHER_FEATURES_REQUEST';
export const GET_OTHER_FEATURES_SUCCESS =
  'wm/ItemCreate/GET_OTHER_FEATURES_SUCCESS';
export const GET_OTHER_FEATURES_FAIL = 'wm/ItemCreate/GET_OTHER_FEATURES_FAIL';
