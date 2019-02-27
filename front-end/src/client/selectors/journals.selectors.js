import { filter } from 'lodash/fp';

export const getHomeJournals = state => 
  filter(journal => journal.acf.isInHomePage, state.journals);