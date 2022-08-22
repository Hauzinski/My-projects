import VideoItemComponent from '../../components/VideoItem/VideoItem';
import useSort from '../../utils/hooks/useSort';
import styles from './VideoSearchPage.module.scss';

export default function VideoSearchPage() {
  const sortedVideoData = useSort();

  return (
    <div className={`container ${styles['main-content']}`}>
      {sortedVideoData.map((item) => (
        <VideoItemComponent key={item.id} data={item} />
      ))}
    </div>
  );
}
