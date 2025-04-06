import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt-PT.json';
import de from '../locales/de.json';

const messages = {
  en,
  pt,
  de,
};

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en',  // Set default locale
  fallbackLocale: 'en',
  availableLocales: ['en', 'pt', 'de'],
  messages,
});

export default i18n;
