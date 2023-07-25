import { useEffect, useState, createContext } from 'react';
import { LangugeCodes } from 'lang/Translation'

const DEFAULT_LANG = 'ru';

type LocalizationContextType = {
  lang: LangugeCodes;
  toggleLang: (code: LangugeCodes) => void;
};

export const LocalizationContext = createContext<LocalizationContextType>(
  {} as LocalizationContextType
);

export function LocalizationProvider({ children }: { children: React.ReactElement }) {
  const [lang, setLang] = useState(
    localStorage.getItem('app-lang') || DEFAULT_LANG
  );

  const toggleLang = (code: string) => setLang(code);

  useEffect(() => {
    localStorage.setItem('app-lang', lang);
  }, [lang]);

  return (
    <LocalizationContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LocalizationContext.Provider>
  );
}
