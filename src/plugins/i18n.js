import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt-PT.json';
import de from '../locales/de.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import it from '../locales/it.json';
import ko from '../locales/ko.json';
import zh from '../locales/zh.json';
import ja from '../locales/ja.json';

const messages = {
  en,
  pt,
  de,
  es,
  fr,
  it,
  ko,
  zh,
  ja,
};

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en',  // Set default locale
  fallbackLocale: 'en',
  availableLocales: ['en', 'pt', 'de', 'es', 'fr', 'it', 'ko', 'zh', 'ja'],
  messages,
});

export default i18n;
