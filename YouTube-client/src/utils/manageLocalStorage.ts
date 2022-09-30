import { IState } from '../models/store.models';

export function getLocalStorage(): IState | null {
  const localStorage = window.localStorage.getItem('youtube-app');

  return localStorage ? JSON.parse(localStorage) : null;
}

export function setLocalStorage(data: IState) {
  window.localStorage.setItem('youtube-app', JSON.stringify(data));
}
