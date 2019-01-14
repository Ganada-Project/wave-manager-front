/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_CATEGORY_1_REQUEST,
  GET_CATEGORY_2_REQUEST,
  GET_CATEGORY_3_REQUEST,
  GET_OTHER_FEATURES_REQUEST,
  SET_ITEM_CREATE_PHASE_1_REQUEST,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function getCategory1Action() {
  return {
    type: GET_CATEGORY_1_REQUEST,
  };
}

export function getCategory2Action({ category1Id }) {
  return {
    type: GET_CATEGORY_2_REQUEST,
    category1Id,
  };
}

export function getCategory3Action({ category2Id }) {
  return {
    type: GET_CATEGORY_3_REQUEST,
    category2Id,
  };
}

export function getOtherFeaturesAction() {
  return {
    type: GET_OTHER_FEATURES_REQUEST,
  };
}

export function setItemCreatePhase1Action({ itemCreatePhase1 }) {
  return {
    type: SET_ITEM_CREATE_PHASE_1_REQUEST,
    itemCreatePhase1,
  };
}
