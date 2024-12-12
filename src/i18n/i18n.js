import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocizeBackend from 'i18next-locize-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json'
import da from './locales/da.json'

i18n
  .use(LocizeBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: { translation: en },
      da: { translation: da }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    backend: {
      projectId: 'your-locize-project-id',
      apiKey: 'your-locize-api-key',
      referenceLng: 'en'
    }
  });

export default i18n;
