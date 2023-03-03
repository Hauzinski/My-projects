import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getVideoData } from '@/api/youtubeAPI';
import {
  setRequestData as setRequestDataAction,
  setPageTokensData as setPageTokensDataAction,
} from '@/store/appCacheSlice';
import { setMainPageScroll as setMainPageScrollAction } from '@/store/appSettingsSlice';
import { IState } from '@/store/store.types';

function useRequestVideoData() {
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

    dispatch(setRequestDataAction(response.videoData));
    dispatch(setPageTokensDataAction(response.pageTokens));
    dispatch(setMainPageScrollAction(0));
  };
}

export { useRequestVideoData };
