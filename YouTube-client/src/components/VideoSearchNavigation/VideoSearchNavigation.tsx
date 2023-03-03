import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ButtonSVGComponent from '@/components/ButtonSVG/ButtonSVG';
import { IState } from '@/store/store.types';
import { useRequestVideoData } from '@/utils/hooks/useRequestVideoData';

import styles from './VideoSearchNavigation.module.scss';

export default function VideoSearchNavigationComponent() {
  const { t } = useTranslation();

  const pageTokens = useSelector((state: IState) => state.cache.pageTokens);

  const requestVideoData = useRequestVideoData();

  const button = [
    {
      class: ['btn-video-search-page-prev'],
      action: () => requestVideoData('pageToken', pageTokens[0]),
      label: t('Previous page'),
      disabled: !pageTokens[0],
    },
    {
      class: ['btn-video-search-page-prev', 'arrow-next'],
      action: () => requestVideoData('pageToken', pageTokens[1]),
      label: t('Next page'),
      disabled: !pageTokens[1],
    },
  ];

  return (
    <nav className={styles.nav}>
      {button.map((value) => (
        <ButtonSVGComponent data={value} key={value.label} />
      ))}
    </nav>
  );
}
