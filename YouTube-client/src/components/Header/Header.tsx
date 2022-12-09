import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { toggleAppSettings } from '../../store/appSettingsSlice';
import { IState } from '../../store/store.types';
import { callbackTimer } from '../../utils/callbackTimer';
import { useSearch } from '../../utils/hooks/useSearch';
import AppLogoComponent from '../AppLogo/AppLogo';
import ButtonSVGComponent from '../ButtonSVG/ButtonSVG';
import SortFiltersComponent from '../SortFilters/SortFilters';
import VideoOrderComponent from '../VideoOrder/VideoOrder';
import VideoPerPageComponent from '../VideoPerPage/VideoPerPage';
import styles from './Header.module.scss';

export default function Header() {
  const request = useSelector((state: IState) => state.cache.request);
  const isAppSettings = useSelector((state: IState) => state.settings.isAppSettings);
  const [sortFiltersStyle, setSortFiltersStyle] = useState(isAppSettings ? '' : styles['sort-filters-hidden']);

  const dispatch = useDispatch();
  const search = useSearch();

  const button = {
    class: ['btn-sort-filters'],
    action: () => dispatch(toggleAppSettings()),
    label: 'Search options',
    disabled: false,
  };
  const appSettingsComponents = [
    <SortFiltersComponent key="SortFiltersComponent" />,
    <VideoPerPageComponent key="VideoPerPageComponent" />,
    <VideoOrderComponent key="VideoOrderComponent" />,
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
            placeholder="Enter a request"
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
