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

export const GET_STYLES_REQUEST = 'wm/ItemCreate/GET_STYLES_REQUEST';
export const GET_STYLES_SUCCESS = 'wm/ItemCreate/GET_STYLES_SUCCESS';
export const GET_STYLES_FAIL = 'wm/ItemCreate/GET_STYLES_FAIL';

export const POST_ITEM_REQUEST = 'wm/ItemCreate/POST_ITEM_REQUEST';
export const POST_ITEM_SUCCESS = 'wm/ItemCreate/POST_ITEM_SUCCESS';
export const POST_ITEM_FAIL = 'wm/ItemCreate/POST_ITEM_FAIL';

export const SET_ITEM_CREATE_PHASE_1_REQUEST =
  'wm/ItemCreate/SET_ITEM_CREATE_PHASE_1_REQUEST';
export const SET_ITEM_CREATE_PHASE_1_SUCCESS =
  'wm/ItemCreate/SET_ITEM_CREATE_PHASE_1_SUCCESS';

export const colorConfig = [
  {
    key: 0,
    color: '#ffffff',
    eng_value: 'white',
    kor_value: '하얀색',
    checked: false,
  },
  {
    key: 1,
    color: '#000000',
    eng_value: 'black',
    kor_value: '검은색',
    checked: false,
  },
  {
    key: 2,
    color: '#9a9a9a',
    eng_value: 'gray',
    kor_value: '회색',
    checked: false,
  },
  {
    key: 3,
    color: '#6b2a16',
    eng_value: 'burgundy',
    kor_value: '버건디색',
    checked: false,
  },
  {
    key: 4,
    color: '#e5c183',
    eng_value: 'apricot',
    kor_value: '살구색',
    checked: false,
  },
  {
    key: 5,
    color: '#22aa23',
    eng_value: 'green',
    kor_value: '초록색',
    checked: false,
  },
  {
    key: 6,
    color: '#2f28f8',
    eng_value: 'blue',
    kor_value: '파란색',
    checked: false,
  },
  {
    key: 7,
    color: '#540c6c',
    eng_value: 'violet',
    kor_value: '보라색',
    checked: false,
  },
  {
    key: 8,
    color: '#f9e83b',
    eng_value: 'yellow',
    kor_value: '노란색',
    checked: false,
  },
  {
    key: 9,
    color: '#f71a9a',
    eng_value: 'pink',
    kor_value: '분홍색',
    checked: false,
  },
  {
    key: 10,
    color: '#e60816',
    eng_value: 'red',
    kor_value: '빨간색',
    checked: false,
  },
  {
    key: 11,
    color: 'gold',
    eng_value: 'gold',
    kor_value: '금색',
    checked: false,
  },
  {
    key: 12,
    color: 'silver',
    eng_value: 'silver',
    kor_value: '은색',
    checked: false,
  },
];

export const imageConfig = [
  {
    key: 0,
    title: '메인사진 (전면)',
    preview: null,
  },
  {
    key: 1,
    title: '메인사진 (전면)',
    preview: null,
  },
  {
    key: 2,
    title: '옆면 또는 디테일',
    preview: null,
  },
  {
    key: 3,
    title: '옆면 또는 디테일',
    preview: null,
  },
  {
    key: 4,
    title: '옆면 또는 디테일',
    preview: null,
  },
  {
    key: 5,
    title: '옆면 또는 디테일',
    preview: null,
  },
  {
    key: 6,
    title: '옆면 또는 디테일',
    preview: null,
  },
  {
    key: 7,
    title: '옆면 또는 디테일',
    preview: null,
  },
];
