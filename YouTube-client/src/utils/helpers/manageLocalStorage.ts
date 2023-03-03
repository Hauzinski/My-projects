import { IState } from '@/store/store.types';

function getLocalStorage(): IState | null {
  const localStorage = window.localStorage.getItem('youtube-app');

  return localStorage ? JSON.parse(localStorage) : null;
}

function setLocalStorage(data: IState) {
  window.localStorage.setItem('youtube-app', JSON.stringify(data));
}

export { getLocalStorage, setLocalStorage };
