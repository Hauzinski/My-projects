import { Item } from './youtubeAPI.model';

export interface IState {
  cache: IStateCache;
  sortFilters: IStateSortFilters;
  settings: IStateSettings;
}

interface IStateCache {
  request: string;
  requestData: Item[];
}

export interface IStateSortFilters {
  byDate: string;
  byViews: string;
  byLikes: string;
  byComments: string;
  byWord: string;
}

interface IStateSettings {
  isSortFilters: boolean;
}
