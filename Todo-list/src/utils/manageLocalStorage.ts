import { IItemTodoList } from '../interfaces/interfaces';

export function getLocalStorage(): [IItemTodoList] | null {
  const localStorage = window.localStorage.getItem('todo-app');

  return localStorage ? JSON.parse(localStorage) : null;
}

export function setLocalStorage(data: [IItemTodoList]) {
  window.localStorage.setItem('todo-app', JSON.stringify(data));
}
