import { get } from 'lodash/fp';

import { Middleware } from 'types/redux.types';

import { SET_CURRENT_LOCALE } from 'actions/locale.actions';

import Root from 'components/root/root';

const apiMiddleware: Middleware = ({ dispatch }) => next => action => {
  if (get('type', action) !== SET_CURRENT_LOCALE) {
    return next(action);
  }

  next(action);

  Root.ssrApiActions.forEach(action => dispatch(action()));
};

export default apiMiddleware;
