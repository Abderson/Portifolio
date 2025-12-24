import { useTheme as useThemeContext } from '../contexts/ThemeContext';
import { ThemeContextType } from '../types';

export const useTheme = (): ThemeContextType => {
  const themeContext = useThemeContext();
  return themeContext;
};

export default useTheme;
