// @flow
import { set, keyBy } from 'lodash/fp';
import { handleActions } from 'redux-actions';

import * as AT from 'actions/product.actions';

const initialState: NetworkState = {};

const productReducer = handleActions(
  {
    [AT.SET_PRODUCTS]: (state, { payload }) =>
      keyBy('id', payload.products)
  },
  initialState
);

export default productReducer;
