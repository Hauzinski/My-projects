import { useDispatch } from 'react-redux';

import { setRequest as setRequestAction } from '@/store/appCacheSlice';

import { useCheckValueRequest } from './useCheckValueRequest';
import { useRequestVideoData } from './useRequestVideoData';

function useSearch() {
  const minCharactersForSearch = 3;

  const requestVideoData = useRequestVideoData();
  const checkValueRequest = useCheckValueRequest();
  const dispatch = useDispatch();

  return (value: string) => {
    if (!checkValueRequest(value) && (value.trim().length >= minCharactersForSearch || value === '')) {
      requestVideoData('searchContent', value);

      dispatch(setRequestAction(value));
    }
  };
}

export { useSearch };
