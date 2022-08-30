import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';
import { setCountOfVideoPerPage as setCountOfVideoPerPageReducer } from '../../store/appSettingsSlice';

export default function useSetCountOfVideoPerPage() {
  const request = useSelector((state: IState) => state.cache.request);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return async (maxResults: string) => {
    const response = await getVideoData(request, maxResults);

    navigate('/');

    dispatch(setCountOfVideoPerPageReducer(maxResults));
    dispatch(setRequestDataReducer(response.videoData));
    dispatch(setPageTokensDataReducer(response.pageTokens));
  };
}
