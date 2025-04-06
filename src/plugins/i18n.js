import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt-PT.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const messages = {
  en,
  pt,
  de,
  es
};

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en',  // Set default locale
  fallbackLocale: 'en',
  availableLocales: ['en', 'pt', 'de', 'es'],
  messages,
});

export default i18n;
