import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  fallbackLng: 'en',
  debug: false,
  interpolation: { escapeValue: false },
});

export const i18next = i18n;
