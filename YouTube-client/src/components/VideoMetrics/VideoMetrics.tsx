import React from 'react';

import { IPropsVideoMetricsComponent } from '../../models/app.models';
import MetricComponent from './Metric/Metric';
import styles from './VideoMetrics.module.scss';

export default function VideoMetricsComponent({ data }: IPropsVideoMetricsComponent) {
  const metrics = [
    {
      class: 'logo-views',
      count: data.viewCount,
      title: 'Views',
    },
    {
      class: 'logo-likes',
      count: data.likeCount,
      title: 'Likes',
    },
    {
      class: 'logo-comments',
      count: data.commentCount,
      title: 'Comments',
    },
    {
      class: 'logo-favorites',
      count: data.favoriteCount,
      title: 'Favorites',
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
