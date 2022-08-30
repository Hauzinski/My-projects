import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppSettings = {
  isSortFilters: false,
  countOfVideoPerPage: '24',
  mainPageScroll: 0,
};

const localStorageAppSettings = getLocalStorage()?.settings;

export const appSettings = createSlice({
  name: 'settings',
  initialState: localStorageAppSettings || defaultAppSettings,
  reducers: {
    toggleSortFilters: (state) => {
      state.isSortFilters = !state.isSortFilters;
    },
    setCountOfVideoPerPage: (state, action: PayloadAction<string>) => {
      state.countOfVideoPerPage = action.payload;
    },
    setMainPageScroll: (state, action: PayloadAction<number>) => {
      state.mainPageScroll = action.payload;
    },
  },
});

export const { toggleSortFilters, setCountOfVideoPerPage, setMainPageScroll } = appSettings.actions;

export default appSettings.reducer;
