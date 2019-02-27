// @flow
import { set, keyBy } from 'lodash/fp';
import { handleActions } from 'redux-actions';

import * as AT from 'actions/journal.actions';

const initialState: NetworkState = {};

const journalReducer = handleActions(
  {
    [AT.SET_JOURNALS]: (state, { payload }) =>
      keyBy('id', payload.journals)
  },
  initialState
);

export default journalReducer;
