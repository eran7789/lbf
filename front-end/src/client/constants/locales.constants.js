import { mapWithKeys } from 'utils/lodash.utils';
import localesTranslations from 'constants/locales';

export const locales = mapWithKeys((locale, key) => key, localesTranslations);

export const defaultLocale = 'en';