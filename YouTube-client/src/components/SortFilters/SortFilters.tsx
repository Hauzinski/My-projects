import React from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setWordFilter as setWordFilterAction } from '@/store/appSortFiltersSlice';
import { IState } from '@/store/store.types';

import FilterComponent from './Filter/Filter';
import styles from './SortFilters.module.scss';

export default function SortFiltersComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const wordFilter = useSelector((state: IState) => state.sortFilters.byWord);
  const filters = [
    {
      type: 'byDate',
      title: t('date'),
      label: t('Sorting by date'),
    },
    {
      type: 'byViews',
      title: t('views'),
      label: t('Sorting by count of views'),
    },
    {
      type: 'byLikes',
      title: t('likes'),
      label: t('Sorting by count of lakes'),
    },
    {
      type: 'byComments',
      title: t('comments'),
      label: t('Sorting by count of comments'),
    },
  ];

  function setWordFilter(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setWordFilterAction(event.target.value));
  }

  return (
    <ul className={styles['sort-filters']}>
      <li>
        <p className={styles['filters-label']}>{t('Sorting by')}:</p>
      </li>
      {filters.map((value) => (
        <li key={value.type}>
          <FilterComponent data={value} />
        </li>
      ))}
      <li>
        <p className={styles['filters-label']}>{t('by word or sentence')}</p>
        <input name="sortByWord" onChange={setWordFilter} type="search" value={wordFilter} />
      </li>
    </ul>
  );
}
