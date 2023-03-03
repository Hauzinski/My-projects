import React from 'react';

import { useTranslation } from 'react-i18next';

import { IPropsVideoMetricsComponent } from '@/app.types';

import MetricComponent from './Metric/Metric';
import styles from './VideoMetrics.module.scss';

export default function VideoMetricsComponent({ data }: IPropsVideoMetricsComponent) {
  const { t } = useTranslation();

  const metrics = [
    {
      class: 'logo-views',
      count: data.viewCount,
      title: t('Views'),
    },
    {
      class: 'logo-likes',
      count: data.likeCount,
      title: t('Likes'),
    },
    {
      class: 'logo-comments',
      count: data.commentCount,
      title: t('Comments'),
    },
    {
      class: 'logo-favorites',
      count: data.favoriteCount,
      title: t('Favorites'),
    },
  ];

  return (
    <ul className={styles['video-metrics']}>
      {metrics.map((item) => (
        <li key={item.title}>
          <MetricComponent data={item} />
        </li>
      ))}
    </ul>
  );
}
