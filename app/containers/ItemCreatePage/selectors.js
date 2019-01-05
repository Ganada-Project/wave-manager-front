/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItemCreate = state => state.get('itemCreate', initialState);

const makeSelectCategory1 = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('category1'),
  );
const makeSelectCategory2 = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('category2'),
  );
const makeSelectCategory3 = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('category3'),
  );
const makeSelectCategory3Loading = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('category3Loading'),
  );

export {
  makeSelectCategory1,
  makeSelectCategory2,
  makeSelectCategory3,
  makeSelectCategory3Loading,
};
