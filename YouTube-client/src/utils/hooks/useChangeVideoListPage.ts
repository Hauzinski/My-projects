import { useDispatch, useSelector } from 'react-redux';

import { getVideoData } from '../../api/youtubeAPI';
import { IState } from '../../models/store.models';
import {
  setRequestData as setRequestDataReducer,
  setPageTokensData as setPageTokensDataReducer,
} from '../../store/appCacheSlice';

export default function useChangeVideoListPage() {
  const request = useSelector((state: IState) => state.cache.request);
  const maxResults = useSelector((state: IState) => state.settings.countOfVideoPerPage);
  const dispatch = useDispatch();

  return async (pageToken: string) => {
    const response = await getVideoData(request, maxResults, pageToken);

    dispatch(setRequestDataReducer(response.videoData));
    dispatch(setPageTokensDataReducer(response.pageTokens));
  };
}
