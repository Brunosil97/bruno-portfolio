import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';

const messages = {
  en,
};

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en',  // Set default locale
  fallbackLocale: 'en',
  messages,
});

export default i18n;
