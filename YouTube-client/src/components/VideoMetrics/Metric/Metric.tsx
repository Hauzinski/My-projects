import React from 'react';

import { IPropsMetric } from '../../../models/app.models';
import formatVideoMetrics from '../../../utils/formatVideoMetrics';
import styles from './Metric.module.scss';

export default function MetricComponent({ data }: IPropsMetric) {
  return (
    <div className={styles.metric} data-title={data.title}>
      <div className={`${styles.logo} ${styles[data.class]}`} />
      <p className={styles.count}>{formatVideoMetrics(data.count)}</p>
    </div>
  );
}
