import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { IState } from '../../store/store.types';
import { formatLowerCamelCaseToCase } from '../../utils/formatLowerCamelCaseToCase';
import { useVideoOrder } from '../../utils/hooks/useVideoOrder';
import styles from './VideoOrder.module.scss';

export default function VideoOrderComponent() {
  const { t } = useTranslation();

  const valueOfVideoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const videoOrder = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];

  const setVideoOrder = useVideoOrder();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setVideoOrder(event.target.value);
  }

  return (
    <div className={styles['video-order']}>
      <p className={styles.label}>{t('Video order')}:</p>
      <select
        className={styles.select}
        value={valueOfVideoOrder}
        onChange={handleChange}
        aria-label={t('Select video order') as string}
      >
        {videoOrder.map((value) => (
          <option value={value} key={value}>
            {formatLowerCamelCaseToCase(t(value))}
          </option>
        ))}
      </select>
    </div>
  );
}
