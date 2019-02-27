// @flow
import { ActionCreator } from 'types/redux.types';

export const LABEL = 'locale';
export const SET_CURRENT_LOCALE: string = `[${LABEL}] Set locale`;

export const setCurrentLocale: ActionCreator = (locale) => ({
  type: SET_CURRENT_LOCALE,
  payload: {
    locale
  }
});