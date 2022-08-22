import { IPropsButton } from '../../models/app.models';
import styles from './ButtonSVG.module.scss';

export default function ButtonSVGComponent({ data }: IPropsButton) {
  return (
    <button className={`button-svg ${styles[data.class]}`} type="button" onClick={data.action} aria-label={data.label}>
      <span />
    </button>
  );
}
