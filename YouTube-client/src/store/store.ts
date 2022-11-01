import { configureStore } from '@reduxjs/toolkit';

import appCacheReducer from './appCacheSlice';
import appSettingsReducer from './appSettingsSlice';
import appSortFiltersReducer from './appSortFiltersSlice';

export default configureStore({
  reducer: {
    cache: appCacheReducer,
    sortFilters: appSortFiltersReducer,
    settings: appSettingsReducer,
  },
});
