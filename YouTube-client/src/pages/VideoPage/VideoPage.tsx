import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonSVGComponent from '../../components/ButtonSVG/ButtonSVG';
import VideoMetricsComponent from '../../components/VideoMetrics/VideoMetrics';
import { IState } from '../../models/store.models';
import formatDate from '../../utils/formatDate';
import styles from './VideoPage.module.scss';

export default function VideoPage() {
  const { id } = useParams();
  const requestData = useSelector((state: IState) => state.cache.requestData);
  const navigate = useNavigate();
  const videoData = requestData.find((value) => value.id === id);

  const button = {
    class: ['btn-video-page-back'],
    action: () => navigate('/'),
    label: 'Return to main page',
    disabled: false,
  };

  return (
    <main className={`main ${styles.main}`}>
      {videoData && (
        <div className={`container ${styles['main-content']}`}>
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${videoData.id}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
        </div>
      )}
      {!videoData && <p className={styles['not-found']}>Sorry, video not found!</p>}
    </main>
  );
}
