import WooCommerceAPI from 'woocommerce-api';

import { WORDPRESS_URL } from 'constants/api.constants';
import {
  WOOCOOMERCE_CONSUMER_SECRET,
  WOOCOOMERCE_CONSUMER_KEY
} from 'constants/config.constants';

const wcApi = new WooCommerceAPI({
  url: WORDPRESS_URL,
  consumerKey: WOOCOOMERCE_CONSUMER_KEY,
  consumerSecret: WOOCOOMERCE_CONSUMER_SECRET,
  version: 'wc/v2',
  wpAPI: true
});

export default wcApi;
