import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';
import { setVideoOrder as setVideoOrderReducer } from '../../store/appSettingsSlice';

export default function useVideoOrder() {
  const request = useSelector((state: IState) => state.cache.request);
  const maxResults = useSelector((state: IState) => state.settings.countOfVideoPerPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return async (videoOrder: string) => {
    const response = await getVideoData(request, videoOrder, maxResults);

    navigate('/');

    dispatch(setVideoOrderReducer(videoOrder));
    dispatch(setRequestDataReducer(response.videoData));
    dispatch(setPageTokensDataReducer(response.pageTokens));
  };
}
