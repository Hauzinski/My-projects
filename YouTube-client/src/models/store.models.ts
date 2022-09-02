import { Item } from './youtubeAPI.model';

export interface IState {
  cache: IStateCache;
  sortFilters: IStateSortFilters;
  settings: IStateSettings;
}

interface IStateCache {
  request: string;
  requestData: Item[];
  pageTokens: string[];
}

export interface IStateSortFilters {
  byDate: string;
  byViews: string;
  byLikes: string;
  byComments: string;
  byWord: string;
}

interface IStateSettings {
  isAppSettings: boolean;
  videoOrder: string;
  countOfVideoPerPage: string;
  mainPageScroll: number;
}
