import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppSettings = {
  isAppSettings: false,
  videoOrder: 'relevance',
  countOfVideoPerPage: '24',
  appLanguage: 'en',
  mainPageScroll: 0,
};

const localStorageAppSettings = getLocalStorage()?.settings;

export const appSettings = createSlice({
  name: 'settings',
  initialState: localStorageAppSettings || defaultAppSettings,
  reducers: {
    toggleAppSettings: (state) => {
      state.isAppSettings = !state.isAppSettings;
    },
    setVideoOrder: (state, action: PayloadAction<string>) => {
      state.videoOrder = action.payload;
    },
    setCountOfVideoPerPage: (state, action: PayloadAction<string>) => {
      state.countOfVideoPerPage = action.payload;
    },
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
    setMainPageScroll: (state, action: PayloadAction<number>) => {
      state.mainPageScroll = action.payload;
    },
  },
});

export const { toggleAppSettings, setVideoOrder, setCountOfVideoPerPage, setAppLanguage, setMainPageScroll } =
  appSettings.actions;

export default appSettings.reducer;
