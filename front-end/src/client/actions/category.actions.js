// @flow
import { ActionCreator } from 'types/redux.types';

export const LABEL = 'category';
export const FETCH_CATEGORIES: string = `[${LABEL}] Fetch Categories`;
export const SET_CATEGORIES: string = `[${LABEL}] Set Categories`;

export const fetchCategories: ActionCreator = () => ({
  type: FETCH_CATEGORIES,
  payload: {
    label: LABEL,
    endpoint: `products/categories?per_page=50`,
    onSuccess: (categories, dispatch) =>
      dispatch(setCategories(categories))
  },
  meta: {
    woocommerce: true
  }
});


export const setCategories: ActionCreator = (categories) => ({
  type: SET_CATEGORIES,
  payload: {
    categories
  }
});