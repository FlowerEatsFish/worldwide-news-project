/**
 * A typedef for News API.
 * API Documentation: https://newsapi.org/docs/endpoints/everything
 * Latest update: 2018-12-03. News API version: 2.4.0.
 */

type TypeCategory = 'business'|'entertainment'|'general'|'health'|'science'|'sports'|'technology';

type TypeCountry = 'ae'|'ar'|'at'|'au'|'be'|'bg'|'br'|'ca'|'ch'|'cn'|'co'|'cu'|'cz'|'de'|'eg'|
                   'fr'|'gb'|'gr'|'hk'|'hu'|'id'|'ie'|'il'|'in'|'it'|'jp'|'kr'|'lt'|'lv'|'ma'|
                   'mx'|'my'|'ng'|'nl'|'no'|'nz'|'ph'|'pl'|'pt'|'ro'|'rs'|'ru'|'sa'|'se'|'sg'|
                   'si'|'sk'|'th'|'tr'|'tw'|'ua'|'us'|'ve'|'za';

type TypeLanguage = 'ar'|'de'|'en'|'es'|'fr'|'he'|'it'|'nl'|'no'|'pt'|'ru'|'se'|'ud'|'zh';

type TypeSorBy = 'relevancy'|'popularity'|'publishedAt';

export interface ISourceOfArticle {
  id: number;
  name: string;
}

export interface IArticle {
  source: ISourceOfArticle;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IResponseBeingError {
  status: 'error';
  code: string;
  message: string;
}

export interface IResponseBeingOK {
  status: 'ok';
  totalResults: number;
  articles: IArticle[];
}

export interface IRequestToTopHeadlines {
  country?: TypeCountry;
  category?: TypeCategory;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export interface IRequestToEverything {
  q?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  // tslint:disable-next-line:no-reserved-keywords
  from?: string;
  to?: string;
  language?: TypeLanguage;
  sortBy?: TypeSorBy;
  pageSize?: number;
  page?: number;
}

export interface INewsApiVersion {
  topHeadlines(object: IRequestToTopHeadlines): Promise<IResponseBeingOK|IResponseBeingError>;
  everything(object: IRequestToEverything): Promise<IResponseBeingOK|IResponseBeingError>;
}

export interface INewsApi {
  v2: INewsApiVersion;
}
