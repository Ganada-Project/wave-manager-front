/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItem = state => state.get('item', initialState);

const makeSelectItemList = () =>
  createSelector(selectItem, itemState => itemState.get('itemList'));

export { makeSelectItemList };
