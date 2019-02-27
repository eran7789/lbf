// @flow
import { get, slice } from 'lodash/fp';

import apiUtils, { getLocaledApiUrl } from 'utils/api.utils';
import wcApi from 'utils/wc-api.utils';
import { isRtlLocale } from 'utils/locale.utils';

import { startNetwork, endNetwork } from 'actions/network.actions';

import { WORDPRESS_URL } from 'constants/api.constants';

import { Middleware } from 'types/redux.types';


const handleRestApi = (action, dispatch, locale) => {
  const {
    url,
    method = 'GET',
    data,
    label,
    onSuccess,
    onError
  } = action.payload;
  const headers = {};
  const localedUrl = getLocaledApiUrl(locale, url);

  const request = apiUtils.request({ method, url: localedUrl, data, headers });

  return request
    .then(({ body }) => {
      dispatch(endNetwork(label));

      if (onSuccess) onSuccess(body, dispatch);
    })
    .catch(error => {
      console.error('API error', error, action);

      dispatch(endNetwork(label));

      if (get('response.status', error) === 401) {
        // TODO: handle 401
      }

      if (onError) onError(error, dispatch);
    });
};

const handleWoocommerceApi = (action, dispatch, locale) => {
  const { endpoint, label, onSuccess, onError } = action.payload;

  wcApi.url = locale === 'en' ? `${WORDPRESS_URL}` : `${WORDPRESS_URL}/${locale}`;

  return wcApi.getAsync(endpoint)
    .then(reposnse => JSON.parse(reposnse.toJSON().body))
    .then(response => {
      dispatch(endNetwork(label));

      if (onSuccess) onSuccess(response, dispatch);
    })
    .catch(error => {
      console.error('WOOCOMMERCE error', error, action);

      dispatch(endNetwork(label));

      if (get('response.status', error) === 401) {
        // TODO: handle 401
      }

      if (onError) onError(error, dispatch);
    });
};

const apiMiddleware: Middleware = ({ dispatch, getState }) => next => action => {
  if (!get('meta.api', action) && !get('meta.woocommerce', action)) {
    return next(action);
  }

  const { label } = action.payload;
  const locale = getState().locale.currentLocale;

  dispatch(startNetwork(label));

  next(action);

  if (get('meta.woocommerce', action)) {
    return handleWoocommerceApi(action, dispatch, locale);
  } else {
    return handleRestApi(action, dispatch, locale);
  }
};

export default apiMiddleware;
