import { configureStore } from '@reduxjs/toolkit';

import appCacheReducer from './appCacheSlice';
import appSettingsReducer from './appSettingsSlice';
import appAppSortFiltersReducer from './appSortFiltersSlice';

export default configureStore({
  reducer: {
    cache: appCacheReducer,
    sortFilters: appAppSortFiltersReducer,
    settings: appSettingsReducer,
  },
});
