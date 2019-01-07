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
const makeSelectOtherFeaturesLoading = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('otherFeaturesLoading'),
  );
const makeSelectElasticity = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('elasticity'),
  );
const makeSelectOpacity = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('opacity'),
  );
const makeSelectThickness = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('thickness'),
  );
const makeSelectTexture = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('texture'),
  );
const makeSelectLining = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('lining'),
  );
const makeSelectQuality = () =>
  createSelector(selectItemCreate, itemCreateState =>
    itemCreateState.get('quality'),
  );

export {
  makeSelectCategory1,
  makeSelectCategory2,
  makeSelectCategory3,
  makeSelectCategory3Loading,
  makeSelectElasticity,
  makeSelectLining,
  makeSelectOpacity,
  makeSelectTexture,
  makeSelectThickness,
  makeSelectQuality,
  makeSelectOtherFeaturesLoading,
};
