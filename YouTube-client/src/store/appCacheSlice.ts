import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Item } from '../models/youtubeAPI.model';
import { getLocalStorage } from '../utils/manageLocalStorage';

const defaultAppCache = {
  request: '',
  requestData: [],
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
  },
});

export const { setRequest, setRequestData } = appSettings.actions;

export default appSettings.reducer;
