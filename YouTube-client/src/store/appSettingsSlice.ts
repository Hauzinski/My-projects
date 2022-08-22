import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppSettings = {
  isSortFilters: false,
};

const localStorageAppSettings = getLocalStorage()?.settings;

export const appSettings = createSlice({
  name: 'settings',
  initialState: localStorageAppSettings || defaultAppSettings,
  reducers: {
    toggleSortFilters: (state) => {
      state.isSortFilters = !state.isSortFilters;
    },
  },
});

export const { toggleSortFilters } = appSettings.actions;

export default appSettings.reducer;
