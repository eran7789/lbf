// @flow
import { ActionCreator } from 'types/redux.types';

export const LABEL = 'product';
export const FETCH_PRODUCTS: string = `[${LABEL}] Fetch Products`;
export const SET_PRODUCTS: string = `[${LABEL}] Set Products`;

export const fetchProducts: ActionCreator = () => ({
  type: FETCH_PRODUCTS,
  payload: {
    label: LABEL,
    endpoint: `products`,
    onSuccess: (products, dispatch) =>
      dispatch(setProducts(products))
  },
  meta: {
    woocommerce: true
  }
});


export const setProducts: ActionCreator = (products) => ({
  type: SET_PRODUCTS,
  payload: {
    products
  }
});