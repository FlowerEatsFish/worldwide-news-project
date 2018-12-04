import { IArticle, IRequestToEverything } from "type/newsapi";

type TypeReducerNewsAction = 'FETCH_NEWS_REQUEST'|'FETCH_NEWS_SUCCESS'|'FETCH_NEWS_FAIL';

type TypeReducerMaxNewsNumberAction = 'SET_MAX_NEWS_NUMBER';

type TypeReducerQueryToNews = 'SET_CURRENT_PAGE';

export interface IWidthOnPixel {
  iphone: number;
  mobile: number;
  laptop: number;
  landscape: number;
}

export interface IState {
  maxNewsNumber: number;
  newsList: IArticle[];
  newsApiKey: string;
  queryToNews: IRequestToEverything;
  widthOnPixel: IWidthOnPixel;
}

export interface IReducerNewsAction {
  type: TypeReducerNewsAction;
  value: IArticle[];
}

export interface IReducerNews {
  state: IArticle[];
  action: IReducerNewsAction;
}

export interface IReducerMaxNewsNumberAction {
  type: TypeReducerMaxNewsNumberAction;
  value: number;
}

export interface IReducerMaxNewsNumber {
  state: number;
  action: IReducerMaxNewsNumberAction;
}

export interface IReducerQueryToNewsAction {
  type: TypeReducerQueryToNews;
  value: number;
}

export interface IReducerQueryToNews {
  state: number;
  action: IReducerQueryToNewsAction;
}
