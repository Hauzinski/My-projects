import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IPropsFilter } from '../../../models/app.models';
import { IState, IStateSortFilters } from '../../../models/store.models';
import { setFilter } from '../../../store/appSortFiltersSlice';
import styles from './Filter.module.scss';

export default function FilterComponent({ data }: IPropsFilter) {
  const filterValue = useSelector((state: IState) => state.sortFilters[data.type as keyof IStateSortFilters]);
  const isFilterArrowHide = filterValue === 'off' ? styles['arrow-hide'] : '';
  const filterArrowStyle = filterValue === 'descending' ? styles['arrow-down'] : '';

  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <button
        className={styles['filter-title']}
        onClick={() => dispatch(setFilter(data.type))}
        type="button"
        aria-label={data.label}
      >
        {data.title}
      </button>
      <div className={`${styles['filter-arrow']} ${filterArrowStyle} ${isFilterArrowHide}`} />
    </div>
  );
}
