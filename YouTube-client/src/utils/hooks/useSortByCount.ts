import { useSelector } from 'react-redux';

import { Item, Statistics } from '../../api/youtubeAPI.types';
import { IState, IStateSortFilters } from '../../store/store.types';

function useSortByCount(data: Item[]) {
  const searchFilters = useSelector((state: IState) => state.sortFilters);

  const filterTypes: { [key: string]: string } = {
    byViews: 'viewCount',
    byLikes: 'likeCount',
    byComments: 'commentCount',
  };

  Object.keys(searchFilters).forEach((filter) => {
    if (filter === 'byWord' || searchFilters[filter as keyof IStateSortFilters] === 'off') {
      return;
    }

    const sortingType = searchFilters[filter as keyof IStateSortFilters] === 'ascending' ? 1 : -1;

    if (filter === 'byDate') {
      data.sort((a, b) => sortingType * (Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)));
    } else {
      data.sort(
        (a, b) =>
          sortingType *
          (Number((a.statistics as Statistics)[filterTypes[filter] as keyof Statistics]) -
            Number((b.statistics as Statistics)[filterTypes[filter] as keyof Statistics]))
      );
    }
  });
}

export { useSortByCount };
