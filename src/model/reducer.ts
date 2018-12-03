import { IArticle, IRequestToEverything } from "./news-api";

type TypeReducerNewsAction = 'FETCH_NEWS_REQUEST'|'FETCH_NEWS_SUCCESS'|'FETCH_NEWS_FAIL';

export interface IState {
  newsList: IArticle[];
  newsApiKey: string;
  queryToNews: IRequestToEverything;
}

export interface IReducerNewsAction {
  type: TypeReducerNewsAction;
  value: IArticle[];
}

export interface IReducerNews {
  state: IArticle[];
  action: IReducerNewsAction;
}
