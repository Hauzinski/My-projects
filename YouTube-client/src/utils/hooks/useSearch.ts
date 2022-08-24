import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { getVideoData } from '../../api/youtubeAPI';
import { setRequest as setRequestReducer, setRequestData as setRequestDataReducer } from '../../store/appCacheSlice';
import useCheckValueRequest from './useCheckValueRequest';

export default function useSearch() {
  const minCharactersForSearch = 3;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkValueRequest = useCheckValueRequest();

  return async (value: string) => {
    if (!checkValueRequest(value) && (value.trim().length >= minCharactersForSearch || value === '')) {
      navigate('/');

      const response = await getVideoData(value);

      dispatch(setRequestDataReducer(response));
      dispatch(setRequestReducer(value));
    }
  };
}
