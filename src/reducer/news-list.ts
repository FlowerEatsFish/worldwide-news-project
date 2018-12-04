/**
 * To mutate the value of news list via Actions.
 */

import { IArticle } from 'type/newsapi';

import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL } from '../action/index';
import { IReducerNewsAction } from '../model/reducer';
import { storeNewsList } from '../store';

const newsList = (state = storeNewsList, action: IReducerNewsAction): IArticle[] => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return action.value;
    case FETCH_NEWS_FAIL:
      return action.value;
    default:
      return state;
  }
};

export default newsList;
