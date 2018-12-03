/**
 * Main entrypoint for this project.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Content from './component/content';
import Pagination from './component/pagination';

import rootReducer from './reducer/index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <div className='master'>
      <Pagination />
      <Content />
      <Pagination />
    </div>
  </Provider>,
  document.getElementById('app')
);
