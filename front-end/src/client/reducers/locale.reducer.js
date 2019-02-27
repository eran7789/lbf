// @flow
import { set } from 'lodash/fp';
import { handleActions } from 'redux-actions';

import * as AT from 'actions/locale.actions';

import { defaultLocale } from 'constants/locales.constants.js';

const initialState: NetworkState = {
  currentLocale: defaultLocale
};

const localeReducer = handleActions(
  {
    [AT.SET_CURRENT_LOCALE]: (state, { payload }) =>
      set('currentLocale', payload.locale, state)
  },
  initialState
);

export default localeReducer;
