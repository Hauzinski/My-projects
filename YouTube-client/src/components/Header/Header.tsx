import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import AppLanguageComponent from '@/components/AppLanguage/AppLanguage';
import AppLogoComponent from '@/components/AppLogo/AppLogo';
import ButtonSVGComponent from '@/components/ButtonSVG/ButtonSVG';
import SortFiltersComponent from '@/components/SortFilters/SortFilters';
import VideoOrderComponent from '@/components/VideoOrder/VideoOrder';
import VideoPerPageComponent from '@/components/VideoPerPage/VideoPerPage';
import { toggleAppSettings } from '@/store/appSettingsSlice';
import { IState } from '@/store/store.types';
import { callbackTimer } from '@/utils/helpers/callbackTimer';
import { useSearch } from '@/utils/hooks/useSearch';

import styles from './Header.module.scss';

export default function Header() {
  const request = useSelector((state: IState) => state.cache.request);
  const isAppSettings = useSelector((state: IState) => state.settings.isAppSettings);
  const [sortFiltersStyle, setSortFiltersStyle] = useState(isAppSettings ? '' : styles['sort-filters-hidden']);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const search = useSearch();

  const button = {
    class: ['btn-sort-filters'],
    action: () => dispatch(toggleAppSettings()),
    label: t('Search options'),
    disabled: false,
  };

  const appSettingsComponents = [
    <SortFiltersComponent key="SortFiltersComponent" />,
    <VideoPerPageComponent key="VideoPerPageComponent" />,
    <VideoOrderComponent key="VideoOrderComponent" />,
    <AppLanguageComponent key="AppLanguageComponent" />,
  ];

  function setRequest(event: React.ChangeEvent<HTMLInputElement>) {
    callbackTimer(search, event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header-content']} ${sortFiltersStyle}`}>
        <AppLogoComponent />
        <form className={styles['search-form']} noValidate>
          <input
            className={styles['search-input']}
            name="searchText"
            onChange={setRequest}
            type="search"
            placeholder={t('Enter a request') as string}
            defaultValue={request}
          />
        </form>
        <ButtonSVGComponent data={button} />
        {appSettingsComponents.map((item) => (
          <CSSTransition
            key={item.key}
            in={isAppSettings}
            timeout={500}
            classNames={{
              enter: styles['app-settings-transition-enter'],
              enterActive: styles['app-settings-transition-enter-active'],
              exit: styles['app-settings-transition-exit'],
              exitActive: styles['app-settings-transition-exit-active'],
            }}
            unmountOnExit
            onEnter={() => setSortFiltersStyle('')}
            onExit={() => setSortFiltersStyle(styles['sort-filters-hidden'])}
          >
            {item}
          </CSSTransition>
        ))}
      </div>
    </header>
  );
}
