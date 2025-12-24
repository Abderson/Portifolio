// Tipos globais
export interface Project {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  github: string;
  demo: string;
}

export interface Certificate {
  id: number;
  titulo: string;
  instituicao: string;
  data: string;
  imagem: string;
  link?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  themeMode: string;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

export interface SchemaMarkupProps {
  type: 'Person' | 'Portfolio' | 'Organization';
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}
