import { useRef, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import VideoItemComponent from '../../components/VideoItem/VideoItem';
import VideoSearchNavigationComponent from '../../components/VideoSearchNavigation/VideoSearchNavigation';
import { IState } from '../../models/store.models';
import { setMainPageScrollTop as setMainPageScrollTopReducer } from '../../store/appSettingsSlice';
import useSort from '../../utils/hooks/useSort';
import styles from './VideoSearchPage.module.scss';

export default function VideoSearchPage() {
  const sortedVideoData = useSort();
  const dispatch = useDispatch();
  const mainPageScrollTop = useSelector((state: IState) => state.settings.mainPageScrollTop);
  const main: React.RefObject<HTMLElement> = useRef(null);
  let scrollTimer: NodeJS.Timeout;

  useLayoutEffect(() => {
    if (main.current) {
      main.current.scrollTop = mainPageScrollTop;
    }
  }, [mainPageScrollTop]);

  function setMainPageScroll() {
    const doneScrollInterval = 500;

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      if (main.current) {
        dispatch(setMainPageScrollTopReducer(main.current.scrollTop));
      }
    }, doneScrollInterval);
  }

  return (
    <>
      <main className={`main ${styles.main}`} ref={main} onScroll={setMainPageScroll}>
        <div className={`container ${styles['main-content']}`}>
          {sortedVideoData.map((item) => (
            <VideoItemComponent key={item.id} data={item} />
          ))}
        </div>
      </main>
      <VideoSearchNavigationComponent />
    </>
  );
}
