import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import useSetCountOfVideoPerPage from '../../utils/hooks/useSetCountOfVideoPerPage';
import styles from './VideoPerPage.module.scss';

export default function VideoPerPageComponent() {
  const countOfVideoPerPage = useSelector((state: IState) => state.settings.countOfVideoPerPage);
  const setCountOfVideoPerPage = useSetCountOfVideoPerPage();

  const videoPerPage = ['12', '24', '36', '48'];

  function handleChange(event: { target: { value: string } }) {
    setCountOfVideoPerPage(event.target.value);
  }

  return (
    <div className={styles['video-per-page']}>
      <p className={styles.label}>Video per page:</p>
      <select
        className={styles.select}
        value={countOfVideoPerPage}
        onChange={handleChange}
        aria-label="Select count of video per page"
      >
        {videoPerPage.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
