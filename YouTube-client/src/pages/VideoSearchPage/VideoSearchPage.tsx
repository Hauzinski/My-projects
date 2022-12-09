import React, { useRef, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import VideoItemComponent from '../../components/VideoItem/VideoItem';
import VideoSearchNavigationComponent from '../../components/VideoSearchNavigation/VideoSearchNavigation';
import { setMainPageScroll as setMainPageScrollAction } from '../../store/appSettingsSlice';
import { IState } from '../../store/store.types';
import useSort from '../../utils/hooks/useSort';
import styles from './VideoSearchPage.module.scss';

export default function VideoSearchPage() {
  const sortedVideoData = useSort();
  const dispatch = useDispatch();
  const mainPageScroll = useSelector((state: IState) => state.settings.mainPageScroll);
  const mainPage: React.RefObject<HTMLElement> = useRef(null);
  let scrollTimer: NodeJS.Timeout;

  useLayoutEffect(() => {
    if (mainPage.current) {
      mainPage.current.scrollTop = mainPageScroll;
    }
  }, [mainPageScroll]);

  function setMainPageScroll() {
    const doneScrollInterval = 500;

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      if (mainPage.current) {
        dispatch(setMainPageScrollAction(mainPage.current.scrollTop));
      }
    }, doneScrollInterval);
  }

  return (
    <>
      <main className={`main ${styles.main}`} ref={mainPage} onScroll={setMainPageScroll}>
        <div className={`container ${styles['main-content']}`}>
          {sortedVideoData.map((item) => (
            <VideoItemComponent key={item.id as string} data={item} />
          ))}
        </div>
      </main>
      {Boolean(sortedVideoData.length) && <VideoSearchNavigationComponent />}
    </>
  );
}
