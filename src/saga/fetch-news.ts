/**
 * One of the Redux middleware for fetching news using News API.
 */

import * as NewsAPI from 'newsapi';
import { put, select, takeEvery } from 'redux-saga/effects';

import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL } from '../action';
import { INewsApi, IRequestToEverything, IResponseBeingOK, IResponseBeingError } from '../model/news-api';
import { IState } from '../model/reducer';

function* fetchNewsAsync() {
  // To get the queries and the API key from reducer.
  const queryToNews: IRequestToEverything = yield select((state: IState) => state.queryToNews);
  const newsApiKey: string = yield select((state: IState) => state.newsApiKey);

  // It is ready to fetch news using News API.
  const newsApi: INewsApi = new NewsAPI(newsApiKey);

  const response: IResponseBeingError|IResponseBeingOK = yield newsApi.v2.everything(queryToNews);

  if (response.status === 'ok') {
    // Return news list to reducer when status is OK.
    yield put({ type: FETCH_NEWS_SUCCESS, value: response.articles });
  } else {
    // Return "null" to reducer when status is ERROR.
    console.error(response.message);
    yield put({ type: FETCH_NEWS_FAIL, value: [] });
  }
};

function* fetchNews() {
  yield takeEvery(FETCH_NEWS_REQUEST, fetchNewsAsync);
};

export default fetchNews;
