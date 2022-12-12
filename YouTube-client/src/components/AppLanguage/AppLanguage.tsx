import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { setAppLanguage as setAppLanguageAction } from '../../store/appSettingsSlice';
import { IState } from '../../store/store.types';
import styles from './AppLanguage.module.scss';

export default function AppLanguageComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const appLanguage = useSelector((state: IState) => state.settings.appLanguage);
  const languages = ['en', 'ru'];

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setAppLanguageAction(event.target.value));
  }

  return (
    <div className={styles['app-language']}>
      <p className={styles.label}>{t('Language')}:</p>
      <select
        className={styles.select}
        value={appLanguage}
        onChange={handleChange}
        aria-label={t('Select app language') as string}
      >
        {languages.map((value) => (
          <option value={value} key={value}>
            {t(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
