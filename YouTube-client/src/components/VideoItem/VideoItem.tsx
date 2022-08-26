import { useNavigate } from 'react-router';

import { IPropsVideoItemComponent } from '../../models/app.models';
import VideoMetricsComponent from '../VideoMetrics/VideoMetrics';
import styles from './VideoItem.module.scss';

export default function VideoItemComponent({ data }: IPropsVideoItemComponent) {
  const navigate = useNavigate();

  function selectVideo() {
    navigate(`/videos/${data.id}`);
  }

  return (
    <div className={styles['video-item']}>
      <img className={styles['video-item-img']} src={data.snippet.thumbnails.high?.url} alt={data.snippet.title} />
      <VideoMetricsComponent data={data.statistics} />
      <h3 className={`title ${styles['video-item-title']}`}>{data.snippet.title}</h3>
      <button className={`button ${styles['video-item-button']}`} type="button" onClick={selectVideo}>
        more...
      </button>
    </div>
  );
}
