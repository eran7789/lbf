import superagent from 'superagent';  

import { WOOCOOMERCE_CONSUMER_KEY, WOOCOOMERCE_CONSUMER_SECRET } from 'constants/config.constants';
import { WORDPRESS_URL } from 'constants/api.constants';

export type Request = {
  method: string,
  url: string,
  data: any,
  headers: {
    [key: string]: string
  },
  userAgent: string
};

export const getLocaledApiUrl = (locale, url) => `${WORDPRESS_URL}/${locale}/wp-json/${url}`;

const apiUtils = {
  request({ method, url, data = null, headers = {}, userAgent, woocommerce = false }: Request) {
    const request = superagent(method, url)
      .set(headers)
      .set('Accept', 'application/json');

    if (userAgent) {
      request.set('user-agent', userAgent);
    }

    if (data) {
      if (method.toUpperCase() === 'GET') {
        request.query(data);
      } else {
        request.set('Content-type', 'application/json').send(data);
      }
    }

    return request.then(data => data); // force request to be sent
  }
};

export default apiUtils;
