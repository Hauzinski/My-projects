import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Header from './layouts/Header/Header';
import { IState } from './models/store.models';
import AppRoutes from './routes/AppRoutes';
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
