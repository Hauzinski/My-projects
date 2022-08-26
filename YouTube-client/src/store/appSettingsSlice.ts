import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppSettings = {
  isSortFilters: false,
  countOfVideoPerPage: '24',
};

const localStorageAppSettings = getLocalStorage()?.settings;

export const appSettings = createSlice({
  name: 'settings',
  initialState: localStorageAppSettings || defaultAppSettings,
  reducers: {
    toggleSortFilters: (state) => {
      state.isSortFilters = !state.isSortFilters;
    },
    changeCountOfVideoPerPage: (state, action: PayloadAction<string>) => {
      state.countOfVideoPerPage = action.payload;
    },
  },
});

export const { toggleSortFilters, changeCountOfVideoPerPage } = appSettings.actions;

export default appSettings.reducer;
