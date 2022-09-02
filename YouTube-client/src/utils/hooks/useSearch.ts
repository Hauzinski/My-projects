import { useDispatch } from 'react-redux';

import { setRequest as setRequestReducer } from '../../store/appCacheSlice';
import useCheckValueRequest from './useCheckValueRequest';
import useRequestVideoData from './useRequestVideoData';

export default function useSearch() {
  const minCharactersForSearch = 3;

  const requestVideoData = useRequestVideoData();
  const checkValueRequest = useCheckValueRequest();
  const dispatch = useDispatch();

  return (value: string) => {
    if (!checkValueRequest(value) && (value.trim().length >= minCharactersForSearch || value === '')) {
      requestVideoData('searchContent', value);

      dispatch(setRequestReducer(value));
    }
  };
}
