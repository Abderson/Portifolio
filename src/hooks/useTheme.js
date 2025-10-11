import { useTheme as useThemeContext } from '../contexts/ThemeContext';

/**
 * Hook personalizado para facilitar o uso do sistema de temas
 * @returns {Object} Objeto com funções e estados do tema
 */
export const useTheme = () => {
  const themeContext = useThemeContext();
  
  return {
    // Estados básicos
    isDarkMode: themeContext.isDarkMode,
    isLightMode: !themeContext.isDarkMode,
    themeMode: themeContext.themeMode,
    systemTheme: themeContext.systemTheme,
    isSystemTheme: themeContext.isSystemTheme,
    
    // Ações
    toggleTheme: themeContext.toggleTheme,
    setTheme: themeContext.setTheme,
    resetToSystem: themeContext.resetToSystem,
    
    // Utilitários
    getCurrentTheme: themeContext.getCurrentTheme,
    getThemeInfo: themeContext.getThemeInfo,
    
    // Helpers para classes CSS
    getThemeClass: () => `theme-${themeContext.getCurrentTheme()}`,
    getDataTheme: () => themeContext.getCurrentTheme(),
    
    // Helpers para cores
    isDark: () => themeContext.isDarkMode,
    isLight: () => !themeContext.isDarkMode,
    
    // Helpers para texto
    getThemeText: () => {
      const info = themeContext.getThemeInfo();
      if (info.isSystem) {
        return `Sistema (${info.system === 'dark' ? 'Escuro' : 'Claro'})`;
      }
      return info.current === 'dark' ? 'Escuro' : 'Claro';
    }
  };
};

export default useTheme;
