import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import ru from './ru/translation.json';

const LANGUAGES = ['ru', 'en'];

i18n.use(initReactI18next).init({
  supportedLngs: LANGUAGES,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
});

export default i18n;
