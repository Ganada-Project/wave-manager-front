/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignUp = state => state.get('signUp', initialState);

const makeSelectStyles = () =>
  createSelector(selectSignUp, signUpState => signUpState.get('styles'));

export { makeSelectStyles };
