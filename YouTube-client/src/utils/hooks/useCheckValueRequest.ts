import { useSelector } from 'react-redux';

import { IState } from '../../store/store.types';

function useCheckValueRequest() {
  const request = useSelector((state: IState) => state.cache.request);

  return (value: string) => {
    return request.toLowerCase() === value.trim().toLowerCase();
  };
}

export { useCheckValueRequest };
