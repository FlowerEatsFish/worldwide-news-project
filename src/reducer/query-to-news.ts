/**
 * To mutate the value of current page via Actions.
 */

import { SET_CURRENT_PAGE } from '../action/index';
import { IReducerQueryToNewsAction } from '../model/reducer';
import { storeQueryToNews } from '../store';

const queryToNews = (state = storeQueryToNews, action: IReducerQueryToNewsAction): any => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {...state, page: action.value};
    default:
      return state;
  }
};

export default queryToNews;
