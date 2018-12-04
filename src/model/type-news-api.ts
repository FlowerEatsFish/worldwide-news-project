/**
 * A typedef for News API.
 * API Documentation: https://newsapi.org/docs/endpoints/everything
 * Latest update: 2018-12-04. News API version: 2.4.0.
 */

declare namespace namespace_type_newsapi {
  type TypeCategory = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';

  type TypeCountry = 'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'co' | 'cu' | 'cz' |
                     'de' | 'eg' | 'fr' | 'gb' | 'gr' | 'hk' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'it' | 'jp' |
                     'kr' | 'lt' | 'lv' | 'ma' | 'mx' | 'my' | 'ng' | 'nl' | 'no' | 'nz' | 'ph' | 'pl' | 'pt' |
                     'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'th' | 'tr' | 'tw' | 'ua' | 'us' |
                     've' | 'za';

  type TypeLanguage = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' |
                      'ud' | 'zh';

  type TypeSorBy = 'relevancy' | 'popularity' | 'publishedAt';

  interface ISourceOfArticle {
    id: number;
    name: string;
  }

  interface IArticle {
    source: ISourceOfArticle;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  interface IResponseBeingError {
    status: 'error';
    code: string;
    message: string;
  }

  interface IResponseBeingOK {
    status: 'ok';
    totalResults: number;
    articles: IArticle[];
  }

  interface IRequestToTopHeadlines {
    country?: TypeCountry;
    category?: TypeCategory;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
  }

  interface IRequestToEverything {
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

  interface INewsApiVersion {
    topHeadlines(object: IRequestToTopHeadlines): Promise<IResponseBeingOK | IResponseBeingError>;
    everything(object: IRequestToEverything): Promise<IResponseBeingOK | IResponseBeingError>;
  }
}

declare module 'type/newsapi' {
  import NewsApi = namespace_type_newsapi;
  export = NewsApi;
}
