import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import ButtonSVGComponent from '../../components/ButtonSVG/ButtonSVG';
import VideoMetricsComponent from '../../components/VideoMetrics/VideoMetrics';
import { IState } from '../../models/store.models';
import formatDate from '../../utils/formatDate';
import getVideoImageThumbnail from '../../utils/getVideoImageThumbnail';
import styles from './VideoPage.module.scss';

export default function VideoPage() {
  const { id } = useParams();
  const requestData = useSelector((state: IState) => state.cache.requestData);
  const navigate = useNavigate();
  const videoData = requestData.find((value) => value.id === id);

  const button = {
    class: 'btn-video-page-back',
    action: () => navigate('/'),
    label: 'Return to main page options',
  };

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles['main-content']}`}>
        {videoData && (
          <>
            <img className={styles.img} src={getVideoImageThumbnail(videoData)} alt={videoData.snippet.title} />
            <h3 className={`title ${styles.title}`}>{videoData.snippet.title}</h3>
            <p className={styles.date}>{formatDate(videoData.snippet.publishedAt)}</p>
            {videoData.snippet.description && (
              <>
                <h4 className={styles['description-title']}>Description:</h4>
                <p className={styles.description}>{videoData.snippet.description}</p>
              </>
            )}
            <div className={styles.metrics}>
              <VideoMetricsComponent data={videoData.statistics} />
            </div>
            <ButtonSVGComponent data={button} />
          </>
        )}
        {!videoData && <p>Video not found!</p>}
      </div>
    </main>
  );
}
