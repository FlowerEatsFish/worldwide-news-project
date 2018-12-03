/**
 * To combine all Reducers.
 */

import { Reducer } from 'react';
import { combineReducers, AnyAction } from 'redux';

import { IRequestToEverything } from '../model/news-api';
import { IState } from '../model/reducer';
import newsList from './news-list';
import { storeNwsApiKey, storeQueryToNews } from '../store';

const newsApiKey = (state = storeNwsApiKey): string => state; 

const queryToNews = (state = storeQueryToNews): IRequestToEverything => state;

const rootReducer: Reducer<IState, AnyAction> = combineReducers({
  newsList,
  newsApiKey,
  queryToNews,
});

export default rootReducer;
