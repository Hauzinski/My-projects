import React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Statistics } from '../../api/youtubeAPI.types';
import { IPropsVideoItemComponent } from '../../app.types';
import VideoMetricsComponent from '../VideoMetrics/VideoMetrics';
import styles from './VideoItem.module.scss';

export default function VideoItemComponent({ data }: IPropsVideoItemComponent) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function selectVideo() {
    navigate(`/videos/${data.id}`);
  }

  return (
    <div className={styles['video-item']}>
      <img className={styles['video-item-img']} src={data.snippet.thumbnails.high?.url} alt={data.snippet.title} />
      <VideoMetricsComponent data={data.statistics as Statistics} />
      <h3 className={`title ${styles['video-item-title']}`}>{data.snippet.title}</h3>
      <button className={`button ${styles['video-item-button']}`} type="button" onClick={selectVideo}>
        {t('more')}...
      </button>
    </div>
  );
}
