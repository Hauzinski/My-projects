import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './styles/common.scss';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import { setLocalStorage } from './utils/manageLocalStorage';
import AppRoutes from './routes/AppRoutes';

import { IItemTodoList } from './models/models';

export default function App() {
  const todoList = useSelector((state: { todoList: [IItemTodoList] }) => state.todoList);

  useEffect(() => {
    setLocalStorage(todoList);
  }, [todoList]);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
