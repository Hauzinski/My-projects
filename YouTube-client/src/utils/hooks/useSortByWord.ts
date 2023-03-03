import { useSelector } from 'react-redux';

import { Item } from '@/api/youtubeAPI.types';
import { IState } from '@/store/store.types';

function useSortByWord() {
  const word = useSelector((state: IState) => state.sortFilters.byWord);

  return (data: Item[]) => {
    return data.filter((item) => {
      const videoTitle = item.snippet.title.toLowerCase();

      return videoTitle.includes(word.toLowerCase());
    });
  };
}

export { useSortByWord };
