import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateSortFilters } from '../models/store.models';
import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppSortFilters: { [key: string]: string } = {
  byDate: 'off',
  byViews: 'off',
  byLikes: 'off',
  byComments: 'off',
  byWord: '',
};

const localStorageAppSortFilters = getLocalStorage()?.sortFilters;

const filterStates: { [key: string]: string } = {
  off: 'descending',
  descending: 'ascending',
  ascending: 'off',
};

export const appSettings = createSlice({
  name: 'sortFilters',
  initialState: localStorageAppSortFilters || defaultAppSortFilters,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof IStateSortFilters] = filterStates[state[action.payload as keyof IStateSortFilters]];
    },
    setWordFilter: (state, action: PayloadAction<string>) => {
      state.byWord = action.payload.trim();
    },
  },
});

export const { setFilter, setWordFilter } = appSettings.actions;

export default appSettings.reducer;
