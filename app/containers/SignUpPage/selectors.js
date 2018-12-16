/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignIn = state => state.get('signIn', initialState);

const makeSelectUsername = () =>
  createSelector(selectSignIn, signInState => signInState.get('username'));

export { selectSignIn, makeSelectUsername };
