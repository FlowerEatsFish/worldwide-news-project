/**
 * To save all states of Store as initial.
 */

import { IRequestToEverything, IArticle } from "./model/news-api";

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
