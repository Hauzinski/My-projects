import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Item } from '../models/youtubeAPI.model';
import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppCache = {
  request: '',
  requestData: [],
  pageTokens: ['', ''],
};

const localStorageAppCache = getLocalStorage()?.cache;

export const appSettings = createSlice({
  name: 'settings',
  initialState: localStorageAppCache || defaultAppCache,
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload.trim();
    },
    setRequestData: (state, action: PayloadAction<Item[]>) => {
      state.requestData = action.payload;
    },
    setPageTokensData: (state, action: PayloadAction<string[]>) => {
      state.pageTokens = [...action.payload];
    },
  },
});

export const { setRequest, setRequestData, setPageTokensData } = appSettings.actions;

export default appSettings.reducer;
