import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { IState } from './store/store.types';
import { setLocalStorage } from './utils/manageLocalStorage';
import './styles/common.scss';

export default function App() {
  const store = useSelector((state: IState) => state);

  useEffect(() => {
    setLocalStorage(store);
  }, [store]);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
