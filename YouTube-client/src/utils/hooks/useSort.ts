import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import useSortByCount from './useSortByCount';
import useSortByWord from './useSortByWord';

export default function useSort() {
  const data = useSelector((state: IState) => state.cache.requestData);
  const newArray = [...data];

  const sortByWord = useSortByWord();

  useSortByCount(newArray);
  return sortByWord(newArray);
}
