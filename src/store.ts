/**
 * To save all states of Store as initial.
 */

import { IRequestToEverything, IArticle } from "type/newsapi";

import { IWidthOnPixel } from "./model/reducer";

export const storeNwsApiKey: string = 'c3a9c8af18cd4611b5d67602b170634b';

export const storeQueryToNews: IRequestToEverything = {
  q: '',
  language: 'en',
  sortBy: 'publishedAt',
  sources: 'the-new-york-times',
  pageSize: 30,
  page: 1,
}

export const storeNewsList: IArticle[] = [];

export const storeMaxNewsNumber = 0;

export const storeWidthOnPixel: IWidthOnPixel = {
  iphone: 375,
  mobile: 600,
  laptop: 900,
  landscape: 1200
}
