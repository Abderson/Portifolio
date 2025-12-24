import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_CONFIG = {
  storageKey: 'portfolio-theme',
  defaultTheme: 'dark' as const,
  themes: {
    light: 'light',
    dark: 'dark'
  }
};

const useSystemTheme = (): 'light' | 'dark' => {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return systemTheme;
};

const useLocalStorage = <T,>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return defaultValue;

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Erro ao ler do localStorage (${key}):`, error);
      return defaultValue;
    }
  });

  const setValue = useCallback((value: T): void => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Erro ao salvar no localStorage (${key}):`, error);
    }
  }, [key]);

  return [storedValue, setValue];
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = THEME_CONFIG.defaultTheme
}) => {
  const systemTheme = useSystemTheme();
  const [storedTheme, setStoredTheme] = useLocalStorage<string>(
    THEME_CONFIG.storageKey,
    defaultTheme
  );

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (storedTheme && storedTheme !== 'system') {
      return storedTheme === 'dark';
    }
    return systemTheme === 'dark';
  });

  const [themeMode, setThemeMode] = useState<string>(() => {
    return storedTheme || defaultTheme;
  });

  const applyTheme = useCallback((theme: string): void => {
    if (typeof document === 'undefined') return;

    const isDark = theme === 'dark';

    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.body.classList.remove('light-theme', 'dark-theme');

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-scheme', theme);
    document.documentElement.classList.add(`${theme}-theme`);

    document.body.className = `${theme}-theme`;

    let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = isDark ? '#0d1117' : '#ffffff';

    let colorSchemeMeta = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement;
    if (!colorSchemeMeta) {
      colorSchemeMeta = document.createElement('meta');
      colorSchemeMeta.name = 'color-scheme';
      document.head.appendChild(colorSchemeMeta);
    }
    colorSchemeMeta.content = theme;

  }, []);

  useEffect(() => {
    let currentTheme = themeMode;

    if (themeMode === 'system') {
      currentTheme = systemTheme;
    }

    setIsDarkMode(currentTheme === 'dark');
    applyTheme(currentTheme);
  }, [themeMode, systemTheme, applyTheme]);

  const toggleTheme = useCallback((): void => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setThemeMode(newTheme);
    setStoredTheme(newTheme);
  }, [isDarkMode, setStoredTheme]);

  const setTheme = useCallback((theme: 'light' | 'dark' | 'system'): void => {
    setThemeMode(theme);
    setStoredTheme(theme);
  }, [setStoredTheme]);

  const contextValue: ThemeContextType = {
    isDarkMode,
    themeMode,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
