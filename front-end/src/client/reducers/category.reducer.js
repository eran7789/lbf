// @flow
import { set, keyBy, filter } from 'lodash/fp';
import { handleActions } from 'redux-actions';

import * as AT from 'actions/category.actions';

const initialState: NetworkState = {};

const categoriesReducer = handleActions(
  {
    [AT.SET_CATEGORIES]: (state, { payload }) => 
      keyBy('id', filter(category => category.slug !== 'uncategorized', payload.categories))
  },
  initialState
);

export default categoriesReducer;
