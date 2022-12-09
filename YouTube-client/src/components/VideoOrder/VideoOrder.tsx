import React from 'react';

import { useSelector } from 'react-redux';

import { IState } from '../../store/store.types';
import { formatLowerCamelCaseToCase } from '../../utils/formatLowerCamelCaseToCase';
import { useVideoOrder } from '../../utils/hooks/useVideoOrder';
import styles from './VideoOrder.module.scss';

export default function VideoOrderComponent() {
  const valueOfVideoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const videoOrder = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];

  const setVideoOrder = useVideoOrder();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setVideoOrder(event.target.value);
  }

  return (
    <div className={styles['video-order']}>
      <p className={styles.label}>Video order:</p>
      <select
        className={styles.select}
        value={valueOfVideoOrder}
        onChange={handleChange}
        aria-label="Select video order"
      >
        {videoOrder.map((value) => (
          <option value={value} key={value}>
            {formatLowerCamelCaseToCase(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
