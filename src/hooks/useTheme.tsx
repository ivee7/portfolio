import { useEffect, useState, createContext } from 'react';

export type Themes = 'light' | 'dark';

const DEFAULT_THEME = 'light';

type ThemeContextType = {
  theme: Themes;
  toggleTheme: (code: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeProvider({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || DEFAULT_THEME
  );

  const toggleTheme = (code: Themes) => setTheme(code);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeContextType}>
      {children}
    </ThemeContext.Provider>
  );
}
