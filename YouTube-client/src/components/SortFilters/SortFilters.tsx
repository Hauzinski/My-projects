import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import { setWordFilter as setWordFilterReducer } from '../../store/appSortFiltersSlice';
import FilterComponent from './Filter/Filter';
import styles from './SortFilters.module.scss';

export default function SortFiltersComponent() {
  const wordFilter = useSelector((state: IState) => state.sortFilters.byWord);
  const input: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

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

  function setWordFilter() {
    const inputValue = input.current?.value;

    dispatch(setWordFilterReducer(inputValue?.length ? inputValue : ''));
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
        <input name="sortByWord" onChange={setWordFilter} type="search" defaultValue={wordFilter} ref={input} />
      </li>
    </ul>
  );
}
