// @flow
import { ActionCreator } from 'types/redux.types';

export const LABEL = 'journal';
export const FETCH_JOURNALS: string = `[${LABEL}] Fetch journals`;
export const SET_JOURNALS: string = `[${LABEL}] Set journals`;

export const fetchJournals: ActionCreator = () => ({
  type: FETCH_JOURNALS,
  payload: { 
    label: LABEL,
    url: `wp/v2/posts`,
    onSuccess: (journals, dispatch) => 
      dispatch(setJournals(journals))
  },
  meta: {
    api: true
  }
});

export const setJournals: ActionCreator = (journals) => ({
  type: SET_JOURNALS,
  payload: { 
    journals
  }
});