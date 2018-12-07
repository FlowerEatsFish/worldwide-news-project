/**
 * To combine all Redux middlewares.
 */

import { fork } from 'redux-saga/effects';

import fetchNews from 'saga/fetch-news';

function* rootSaga() {
  yield [
    fork(fetchNews),
  ];
}

export default rootSaga;
