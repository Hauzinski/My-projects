import styles from './Button.module.scss';

import { IPropsButton } from '../../models/models';

export default function Button({ data }: IPropsButton) {
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
