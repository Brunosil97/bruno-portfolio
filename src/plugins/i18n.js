import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt-PT.json';

const messages = {
  en,
  pt,
};

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en',  // Set default locale
  fallbackLocale: 'en',
  messages,
});

export default i18n;
