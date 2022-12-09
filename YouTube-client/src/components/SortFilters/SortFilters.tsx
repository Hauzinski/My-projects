import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setWordFilter as setWordFilterAction } from '../../store/appSortFiltersSlice';
import { IState } from '../../store/store.types';
import FilterComponent from './Filter/Filter';
import styles from './SortFilters.module.scss';

export default function SortFiltersComponent() {
  const wordFilter = useSelector((state: IState) => state.sortFilters.byWord);
  const filters = [
    {
      type: 'byDate',
      title: 'date',
      label: 'Sorting by date',
    },
    {
      type: 'byViews',
      title: 'views',
      label: 'Sorting by count of views',
    },
    {
      type: 'byLikes',
      title: 'likes',
      label: 'Sorting by count of lakes',
    },
    {
      type: 'byComments',
      title: 'comments',
      label: 'Sorting by count of comments',
    },
  ];

  const dispatch = useDispatch();

  function setWordFilter(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setWordFilterAction(event.target.value));
  }

  return (
    <ul className={styles['sort-filters']}>
      <li>
        <p className={styles['filters-label']}>Sorting by:</p>
      </li>
      {filters.map((value) => (
        <li key={value.type}>
          <FilterComponent data={value} />
        </li>
      ))}
      <li>
        <p className={styles['filters-label']}>by word or sentence</p>
        <input name="sortByWord" onChange={setWordFilter} type="search" value={wordFilter} />
      </li>
    </ul>
  );
}
