import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';
import { setMainPageScroll as setMainPageScrollReducer } from '../../store/appSettingsSlice';

export default function useRequestVideoData() {
  const request = useSelector((state: IState) => state.cache.request);
  const videoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const maxResults = useSelector((state: IState) => state.settings.countOfVideoPerPage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return async (type: string, value: string) => {
    const requestParams = [
      type === 'searchContent' ? value : request,
      type === 'videoOrder' ? value : videoOrder,
      type === 'maxResults' ? value : maxResults,
      type === 'pageToken' ? value : '',
    ] as const;

    navigate('/');

    const response = await getVideoData(...requestParams);

    dispatch(setRequestDataReducer(response.videoData));
    dispatch(setPageTokensDataReducer(response.pageTokens));
    dispatch(setMainPageScrollReducer(0));
  };
}