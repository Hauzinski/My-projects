import React from 'react';

import { IPropsButton } from '../../models/app.models';
import styles from './ButtonSVG.module.scss';

export default function ButtonSVGComponent({ data }: IPropsButton) {
  const btnStyles = data.class.map((style) => styles[style]).join(' ');

  return (
    <button
      className={`button-svg ${btnStyles}`}
      type="button"
      onClick={data.action}
      aria-label={data.label}
      disabled={data.disabled}
    >
      <span />
    </button>
  );
}
