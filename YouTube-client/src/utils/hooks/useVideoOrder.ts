import { useDispatch } from 'react-redux';

import { setVideoOrder as setVideoOrderReducer } from '../../store/appSettingsSlice';
import useRequestVideoData from './useRequestVideoData';

export default function useVideoOrder() {
  const requestVideoData = useRequestVideoData();
  const dispatch = useDispatch();

  return (value: string) => {
    requestVideoData('videoOrder', value);

    dispatch(setVideoOrderReducer(value));
  };
}
