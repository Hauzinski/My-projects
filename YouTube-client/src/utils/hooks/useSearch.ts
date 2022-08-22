import { useDispatch } from 'react-redux';

import { getVideoData } from '../../api/youtubeAPI';
import { setRequest as setRequestReducer, setRequestData as setRequestDataReducer } from '../../store/appCacheSlice';
import useCheckValueRequest from './useCheckValueRequest';

export default function useSearch() {
  const minCharactersForSearch = 3;
  const dispatch = useDispatch();
  const checkValueRequest = useCheckValueRequest();

  return async (value: string) => {
    if (!checkValueRequest(value) && (value.trim().length >= minCharactersForSearch || value === '')) {
      const response = await getVideoData(value);

      dispatch(setRequestDataReducer(response));

      dispatch(setRequestReducer(value));
    }
  };
}
