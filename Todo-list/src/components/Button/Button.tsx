import styles from './Button.module.scss';

import { IPropsButton } from '../../interfaces/interfaces';

export default function Button(props: IPropsButton) {
  const { data } = props;

  return (
    <button
      className={`button ${styles.button} ${styles[data.class]}`}
      type="button"
      onClick={data.action}
      title={data.title}
      aria-label={data.label}
    />
  );
}
