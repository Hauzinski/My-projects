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
      <picture className={styles['video-item-img']}>
        <source media="(min-width: 3840px)" srcSet={data.snippet.thumbnails.maxres?.url} />
        <source media="(min-width: 1920px)" srcSet={data.snippet.thumbnails.standard?.url} />
        <source media="(min-width: 1366px)" srcSet={data.snippet.thumbnails.high?.url} />
        <source media="(min-width: 320px)" srcSet={data.snippet.thumbnails.medium.url} />
        <img src={data.snippet.thumbnails.default.url} alt={data.snippet.title} />
      </picture>
      <VideoMetricsComponent data={data.statistics as Statistics} />
      <h3 className={`title ${styles['video-item-title']}`}>{data.snippet.title}</h3>
      <button className={`button ${styles['video-item-button']}`} type="button" onClick={selectVideo}>
        {t('more')}...
      </button>
    </div>
  );
}
