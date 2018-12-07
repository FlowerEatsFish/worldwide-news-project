/**
 * To combine all Reducers.
 */

import { Reducer } from 'react';
import { combineReducers, AnyAction } from 'redux';

import { IState, IWidthOnPixel } from 'model/reducer';
import maxNewsNumber from 'reducer/max-news-number';
import newsList from 'reducer/news-list';
import queryToNews from 'reducer/query-to-news';
import { storeNwsApiKey, storeWidthOnPixel } from 'store';

const newsApiKey = (state = storeNwsApiKey): string => state; 

const widthOnPixel = (state = storeWidthOnPixel): IWidthOnPixel => state;

const rootReducer: Reducer<IState, AnyAction> = combineReducers({
  maxNewsNumber,
  newsList,
  newsApiKey,
  queryToNews,
  widthOnPixel
});

export default rootReducer;
