import { useDispatch } from 'react-redux';

import { setCountOfVideoPerPage as setCountOfVideoPerPageAction } from '../../store/appSettingsSlice';

import { useRequestVideoData } from './useRequestVideoData';

function useSetCountOfVideoPerPage() {
  const requestVideoData = useRequestVideoData();
  const dispatch = useDispatch();

  return (value: string) => {
    requestVideoData('maxResults', value);

    dispatch(setCountOfVideoPerPageAction(value));
  };
}

export { useSetCountOfVideoPerPage };
