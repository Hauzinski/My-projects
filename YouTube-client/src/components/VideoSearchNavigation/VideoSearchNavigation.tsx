import React from 'react';

import { useSelector } from 'react-redux';

import { IState } from '../../store/store.types';
import { useRequestVideoData } from '../../utils/hooks/useRequestVideoData';
import ButtonSVGComponent from '../ButtonSVG/ButtonSVG';
import styles from './VideoSearchNavigation.module.scss';

export default function VideoSearchNavigationComponent() {
  const pageTokens = useSelector((state: IState) => state.cache.pageTokens);

  const requestVideoData = useRequestVideoData();

  const button = [
    {
      class: ['btn-video-search-page-prev'],
      action: () => requestVideoData('pageToken', pageTokens[0]),
      label: 'Previous page',
      disabled: !pageTokens[0],
    },
    {
      class: ['btn-video-search-page-prev', 'arrow-next'],
      action: () => requestVideoData('pageToken', pageTokens[1]),
      label: 'Next page',
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
