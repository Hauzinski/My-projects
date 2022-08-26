import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequest as setRequestReducer,
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';
import useCheckValueRequest from './useCheckValueRequest';

export default function useSearch() {
  const minCharactersForSearch = 3;
  const maxResults = useSelector((state: IState) => state.settings.countOfVideoPerPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkValueRequest = useCheckValueRequest();

  return async (value: string) => {
    if (!checkValueRequest(value) && (value.trim().length >= minCharactersForSearch || value === '')) {
      navigate('/');

      const response = await getVideoData(value, maxResults);

      dispatch(setRequestDataReducer(response.videoData));
      dispatch(setPageTokensDataReducer(response.pageTokens));
      dispatch(setRequestReducer(value));
    }
  };
}
