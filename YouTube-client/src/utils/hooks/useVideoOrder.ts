import { useDispatch } from 'react-redux';

import { setVideoOrder as setVideoOrderAction } from '../../store/appSettingsSlice';
import { useRequestVideoData } from './useRequestVideoData';

function useVideoOrder() {
  const requestVideoData = useRequestVideoData();
  const dispatch = useDispatch();

  return (value: string) => {
    requestVideoData('videoOrder', value);

    dispatch(setVideoOrderAction(value));
  };
}

export { useVideoOrder };
