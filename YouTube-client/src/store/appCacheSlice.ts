import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Item } from '../api/youtubeAPI.types';
import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppCache = {
  request: '',
  requestData: [],
  pageTokens: ['', ''],
};

const localStorageAppCache = getLocalStorage()?.cache;

export const appCache = createSlice({
  name: 'cache',
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

export const { setRequest, setRequestData, setPageTokensData } = appCache.actions;

export default appCache.reducer;
