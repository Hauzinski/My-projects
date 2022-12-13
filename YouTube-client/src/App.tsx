import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { IState } from './store/store.types';
import { setLocalStorage } from './utils/manageLocalStorage';
import './styles/common.scss';

export default function App() {
  const store = useSelector((state: IState) => state);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(store.settings.appLanguage);
    setLocalStorage(store);
  }, [store]);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
