import * as NewsAPI from 'newsapi';

import { storeNwsApiKey, storeQueryToNews } from '../store';

describe('To check whether News API is normal on running', () => {
  it('should return "ok" if API key and the initial parameters are valid', async () => {
    const newsApi = new NewsAPI(storeNwsApiKey);
    const response = await newsApi.v2.everything(storeQueryToNews);

    expect(response.status).toBe('ok');
  });

  it('should throw an error if all required parameters are missing but API key is valid', async () => {
    let errorResult = '';

    try {
      const newsApi = new NewsAPI(storeNwsApiKey);

      await newsApi.v2.everything({});
    } catch (error) {
      errorResult = error.message;
    }

    expect(errorResult).toBe('Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, sources, domains.');
  });

  it('should throw an error if the API key is missing. All required parameters are also missing but they are not important to this test.', async () => {
    let errorResult = '';

    try {
      const newsApi = new NewsAPI(null);
      await newsApi.v2.everything({});
    } catch (error) {
      errorResult = error.message;
    }

    expect(errorResult).toBe('No API key specified');
  });
});
