/**
 * To combine all Reducers.
 */

import { Reducer } from 'react';
import { combineReducers, AnyAction } from 'redux';

import { IState } from '../model/reducer';
import maxNewsNumber from './max-news-number';
import newsList from './news-list';
import queryToNews from './query-to-news';
import { storeNwsApiKey } from '../store';

const newsApiKey = (state = storeNwsApiKey): string => state; 

const rootReducer: Reducer<IState, AnyAction> = combineReducers({
  maxNewsNumber,
  newsList,
  newsApiKey,
  queryToNews,
});

export default rootReducer;
