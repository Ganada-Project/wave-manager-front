/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectIdToken = () =>
  createSelector(selectGlobal, globalState => globalState.get('idToken'));

const makeSelectUserData = () =>
  createSelector(selectGlobal, globalState => globalState.get('userData'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  );

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectIdToken,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectUserData,
};
