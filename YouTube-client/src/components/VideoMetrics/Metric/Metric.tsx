import React from 'react';

import { IPropsMetric } from '@/app.types';
import { formatVideoMetrics } from '@/utils/helpers/formatVideoMetrics';

import styles from './Metric.module.scss';

export default function MetricComponent({ data }: IPropsMetric) {
  return (
    <div className={styles.metric} data-title={data.title}>
      <div className={`${styles.logo} ${styles[data.class]}`} />
      <p className={styles.count}>{formatVideoMetrics(data.count)}</p>
    </div>
  );
}
