/**
 * A typedef for News API.
 * API Documentation: https://newsapi.org/docs/endpoints/everything
 * Latest update: 2018-12-04. News API version: 2.4.0.
 */

declare namespace namespace_newsapi {
  import INewsApiVersion = namespace_type_newsapi.INewsApiVersion;

  interface INewsApi {
    API_KEY: string;
    v2: INewsApiVersion;
  }

  interface INewsApiConstructor {
    new(apiKey: string): INewsApi;
  }

  export const NewsApi: INewsApiConstructor;
}

declare module 'newsapi' {
  import NewsApi = namespace_newsapi.NewsApi;
  export = NewsApi;
}
