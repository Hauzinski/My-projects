import { useDispatch, useSelector } from 'react-redux';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';
import { setMainPageScroll as setMainPageScrollReducer } from '../../store/appSettingsSlice';

export default function useChangeVideoListPage() {
  const request = useSelector((state: IState) => state.cache.request);
  const videoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const maxResults = useSelector((state: IState) => state.settings.countOfVideoPerPage);
  const dispatch = useDispatch();

  return async (pageToken: string) => {
    const response = await getVideoData(request, videoOrder, maxResults, pageToken);

    dispatch(setRequestDataReducer(response.videoData));
    dispatch(setPageTokensDataReducer(response.pageTokens));
    dispatch(setMainPageScrollReducer(0));
  };
}