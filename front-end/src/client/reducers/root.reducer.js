// @flow
import { combineReducers } from 'redux';

import network from 'reducers/network.reducer';
import journals from 'reducers/journal.reducer';
import products from 'reducers/product.reducer';
import categories from 'reducers/category.reducer';
import locale from 'reducers/locale.reducer';

export const reducersMap = {
  network,
  journals,
  products,
  categories,
  locale
};

export default combineReducers(reducersMap);
