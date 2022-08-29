import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AppLogoComponent from '../../components/AppLogo/AppLogo';
import ButtonSVGComponent from '../../components/ButtonSVG/ButtonSVG';
import SortFiltersComponent from '../../components/SortFilters/SortFilters';
import VideoPerPageComponent from '../../components/VideoPerPage/VideoPerPage';
import { IState } from '../../models/store.models';
import { toggleSortFilters } from '../../store/appSettingsSlice';
import callbackTimer from '../../utils/callbackTimer';
import useSearch from '../../utils/hooks/useSearch';
import styles from './Header.module.scss';

export default function Header() {
  const request = useSelector((state: IState) => state.cache.request);
  const isSortFilters = useSelector((state: IState) => state.settings.isSortFilters);
  const input: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();
  const search = useSearch();

  const button = {
    class: ['btn-sort-filters'],
    action: () => dispatch(toggleSortFilters()),
    label: 'Search options',
    disabled: false,
  };

  function setRequest() {
    const inputValue = input.current?.value;

    callbackTimer(search, inputValue?.length ? inputValue : '');
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header-content']}`}>
        <AppLogoComponent />
        <form className={styles['search-form']} noValidate>
          <input
            className={styles['search-input']}
            name="searchText"
            onChange={setRequest}
            type="search"
            placeholder="Enter a request"
            defaultValue={request}
            ref={input}
          />
        </form>
        <ButtonSVGComponent data={button} />
        {isSortFilters && (
          <>
            <SortFiltersComponent />
            <VideoPerPageComponent />
          </>
        )}
      </div>
    </header>
  );
}
