import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import formatLowerCamelCaseToCase from '../../utils/formatLowerCamelCaseToCase';
import useVideoOrder from '../../utils/hooks/useVideoOrder';
import styles from './VideoOrder.module.scss';

export default function VideoOrderComponent() {
  const videoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const videoPerPage = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];

  const setVideoOrder = useVideoOrder();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setVideoOrder(event.target.value);
  }

  return (
    <div className={styles['video-order']}>
      <p className={styles.label}>Video order:</p>
      <select className={styles.select} value={videoOrder} onChange={handleChange} aria-label="Select video order">
        {videoPerPage.map((value) => (
          <option value={value} key={value}>
            {formatLowerCamelCaseToCase(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
