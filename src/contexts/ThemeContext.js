import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Configurações do tema
const THEME_CONFIG = {
  storageKey: 'portfolio-theme',
  defaultTheme: 'dark',
  themes: {
    light: 'light',
    dark: 'dark'
  }
};

// Hook para detectar preferência do sistema
const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Adiciona listener para mudanças na preferência do sistema
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return systemTheme;
};

// Hook para gerenciar localStorage com tratamento de erros
const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Erro ao ler do localStorage (${key}):`, error);
      return defaultValue;
    }
  });

  const setValue = useCallback((value) => {
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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children, defaultTheme = THEME_CONFIG.defaultTheme }) => {
  const systemTheme = useSystemTheme();
  const [storedTheme, setStoredTheme] = useLocalStorage(
    THEME_CONFIG.storageKey, 
    defaultTheme
  );
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Prioridade: localStorage > preferência do sistema > padrão
    if (storedTheme && storedTheme !== 'system') {
      return storedTheme === 'dark';
    }
    return systemTheme === 'dark';
  });

  const [themeMode, setThemeMode] = useState(() => {
    return storedTheme || defaultTheme;
  });

  // Aplica o tema ao DOM
  const applyTheme = useCallback((theme) => {
    if (typeof document === 'undefined') return;

    const isDark = theme === 'dark';
    
    // Remove classes antigas
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Adiciona data attributes e classes
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-scheme', theme);
    document.documentElement.classList.add(`${theme}-theme`);
    
    document.body.className = `${theme}-theme`;
    
    // Adiciona meta tag para theme-color
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = isDark ? '#0d1117' : '#ffffff';
    
    // Adiciona meta tag para color-scheme
    let colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
    if (!colorSchemeMeta) {
      colorSchemeMeta = document.createElement('meta');
      colorSchemeMeta.name = 'color-scheme';
      document.head.appendChild(colorSchemeMeta);
    }
    colorSchemeMeta.content = theme;
    
  }, []);

  // Sincroniza com mudanças no tema
  useEffect(() => {
    let currentTheme = themeMode;
    
    if (themeMode === 'system') {
      currentTheme = systemTheme;
    }
    
    setIsDarkMode(currentTheme === 'dark');
    applyTheme(currentTheme);
  }, [themeMode, systemTheme, applyTheme]);

  // Toggle entre temas
  const toggleTheme = useCallback(() => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setThemeMode(newTheme);
    setStoredTheme(newTheme);
  }, [isDarkMode, setStoredTheme]);

  // Define tema específico
  const setTheme = useCallback((theme) => {
    if (THEME_CONFIG.themes[theme] || theme === 'system') {
      setThemeMode(theme);
      setStoredTheme(theme);
    }
  }, [setStoredTheme]);

  // Reseta para preferência do sistema
  const resetToSystem = useCallback(() => {
    setThemeMode('system');
    setStoredTheme('system');
  }, [setStoredTheme]);

  // Detecta se está usando tema do sistema
  const isSystemTheme = themeMode === 'system';

  // Context value
  const contextValue = {
    // Estados
    isDarkMode,
    themeMode,
    systemTheme,
    isSystemTheme,
    
    // Ações
    toggleTheme,
    setTheme,
    resetToSystem,
    
    // Utilitários
    getCurrentTheme: () => isSystemTheme ? systemTheme : themeMode,
    getThemeInfo: () => ({
      current: isDarkMode ? 'dark' : 'light',
      mode: themeMode,
      system: systemTheme,
      isSystem: isSystemTheme
    })
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};