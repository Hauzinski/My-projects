import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import { Item } from '../../models/youtubeAPI.models';

export default function useSortByWord() {
  const word = useSelector((state: IState) => state.sortFilters.byWord);

  return (data: Item[]) => {
    return data.filter((item) => {
      const videoTitle = item.snippet.title.toLowerCase();

      return videoTitle.includes(word.toLowerCase());
    });
  };
}
