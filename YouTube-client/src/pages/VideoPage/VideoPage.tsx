import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Statistics } from '@/api/youtubeAPI.types';
import ButtonSVGComponent from '@/components/ButtonSVG/ButtonSVG';
import VideoMetricsComponent from '@/components/VideoMetrics/VideoMetrics';
import { IState } from '@/store/store.types';
import { formatDate } from '@/utils/helpers/formatDate';

import styles from './VideoPage.module.scss';

export default function VideoPage() {
  const { id } = useParams();
  const requestData = useSelector((state: IState) => state.cache.requestData);
  const navigate = useNavigate();
  const { t } = useTranslation();
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
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            frameBorder="0"
          />
          <h3 className={`title ${styles.title}`}>{videoData.snippet.title}</h3>
          <p className={styles.date}>{formatDate(videoData.snippet.publishedAt)}</p>
          {videoData.snippet.description && (
            <>
              <h4 className={styles['description-title']}>{t('Description')}:</h4>
              <p className={styles.description}>{videoData.snippet.description}</p>
            </>
          )}
          <div className={styles.metrics}>
            <VideoMetricsComponent data={videoData.statistics as Statistics} />
          </div>
          <ButtonSVGComponent data={button} />
        </div>
      )}
      {!videoData && <p className={styles['not-found']}>{t('Sorry, video not found!')}</p>}
    </main>
  );
}
