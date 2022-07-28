import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/common.scss';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

import { setLocalStorage } from './utils/manageLocalStorage';

import { IItemTodoList } from './models/models';

export default function App() {
  const todoList = useSelector((state: { todoList: [IItemTodoList] }) => state.todoList);

  useEffect(() => {
    setLocalStorage(todoList);
  }, [todoList]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<p>404: Page not found.</p>} />
      </Routes>
      <Footer />
    </>
  );
}
