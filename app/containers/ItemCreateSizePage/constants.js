/*
 * ItemCreateSizeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const POST_ITEM_SIZE_REQUEST =
  'wm/ItemCreateSizePage/POST_ITEM_SIZE_REQUEST';
export const POST_ITEM_SIZE_SUCCESS =
  'wm/ItemCreateSizePage/POST_ITEM_SIZE_SUCCESS';
export const POST_ITEM_SIZE_FAIL = 'wm/ItemCreateSizePage/POST_ITEM_SIZE_FAIL';

export const initialSizeList = [
  {
    id: 1,
    sizeName: '',
    shoulderWidth: '',
    chestLength: '',
    armLength: '',
    totalLength: '',
    quantity: '',
  },
  {
    id: 2,
    sizeName: '',
    shoulderWidth: '',
    chestLength: '',
    armLength: '',
    totalLength: '',
    quantity: '',
  },
  {
    id: 3,
    sizeName: '',
    shoulderWidth: '',
    chestLength: '',
    armLength: '',
    totalLength: '',
    quantity: '',
  },
  {
    id: 4,
    sizeName: '',
    shoulderWidth: '',
    chestLength: '',
    armLength: '',
    totalLength: '',
    quantity: '',
  },
];

export const measure = [
  { key: 'mm', text: 'mm', value: 1 },
  { key: 'cm', text: 'cm', value: 2 },
  { key: 'inch', text: 'inch', value: 3 },
];
