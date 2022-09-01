import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import useVideoOrder from '../../utils/hooks/useVideoOrder';
import styles from './VideoOrder.module.scss';

export default function VideoOrderComponent() {
  const videoOrder = useSelector((state: IState) => state.settings.videoOrder);
  const setVideoOrder = useVideoOrder();

  const videoPerPage = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];

  function handleChange(event: { target: { value: string } }) {
    setVideoOrder(event.target.value);
  }

  return (
    <div className={styles['video-order']}>
      <p className={styles.label}>Video order:</p>
      <select
        className={styles.select}
        defaultValue={videoOrder}
        onChange={handleChange}
        aria-label="Select video order"
      >
        {videoPerPage.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
