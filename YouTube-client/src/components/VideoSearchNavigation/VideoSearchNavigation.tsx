import { useSelector } from 'react-redux';

import { IState } from '../../models/store.models';
import useChangeVideoListPage from '../../utils/hooks/useChangeVideoListPage';
import ButtonSVGComponent from '../ButtonSVG/ButtonSVG';
import styles from './VideoSearchNavigation.module.scss';

export default function VideoSearchNavigationComponent() {
  const pageTokens = useSelector((state: IState) => state.cache.pageTokens);
  const changeVideoListPage = useChangeVideoListPage();

  const button = [
    {
      class: ['btn-video-search-page-prev'],
      action: () => changeVideoListPage(pageTokens[0]),
      label: 'Previous page',
      disabled: !pageTokens[0],
    },
    {
      class: ['btn-video-search-page-prev', 'arrow-next'],
      action: () => changeVideoListPage(pageTokens[1]),
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
