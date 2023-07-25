import English from './Eng';
import Russian from './Ru';

export type LangugeCodes = 'ru' | 'eng';
type MatrixCodes = keyof typeof English;

export const langCodes = [
    {
        code: 'ru',
        text: 'РУС',
    },
    {
        code: 'eng',
        text: 'ENG'
    }
];

export const getTranslations = (langCode: LangugeCodes) => {
  if (langCode === 'eng') return English;
  if (langCode === 'ru') return Russian;
};

export const localize = (langCode: LangugeCodes, phraseKey: MatrixCodes): string => {
  const lang = getTranslations(langCode);
  return lang[phraseKey];
};