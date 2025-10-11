import React from 'react';
import { useTheme } from '../hooks/useTheme';
import './ThemeDemo.css';

const ThemeDemo = () => {
  const { 
    isDarkMode, 
    themeMode, 
    systemTheme, 
    isSystemTheme,
    toggleTheme, 
    setTheme, 
    resetToSystem,
    getThemeText,
    getThemeInfo 
  } = useTheme();

  const themeInfo = getThemeInfo();

  return (
    <div className="theme-demo">
      <h3>Demonstração do Sistema de Temas</h3>
      
      <div className="demo-section">
        <h4>Estado Atual</h4>
        <div className="theme-status">
          <div className="status-item">
            <span className="label">Tema atual:</span>
            <span className="value">{getThemeText()}</span>
          </div>
          <div className="status-item">
            <span className="label">Modo:</span>
            <span className="value">{themeMode}</span>
          </div>
          <div className="status-item">
            <span className="label">Sistema:</span>
            <span className="value">{systemTheme}</span>
          </div>
          <div className="status-item">
            <span className="label">Usando sistema:</span>
            <span className="value">{isSystemTheme ? 'Sim' : 'Não'}</span>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h4>Controles</h4>
        <div className="theme-controls">
          <button 
            onClick={toggleTheme}
            className="demo-button primary"
          >
            Alternar Tema
          </button>
          
          <button 
            onClick={() => setTheme('light')}
            className="demo-button"
            disabled={themeMode === 'light'}
          >
            Tema Claro
          </button>
          
          <button 
            onClick={() => setTheme('dark')}
            className="demo-button"
            disabled={themeMode === 'dark'}
          >
            Tema Escuro
          </button>
          
          <button 
            onClick={() => setTheme('system')}
            className="demo-button"
            disabled={themeMode === 'system'}
          >
            Seguir Sistema
          </button>
          
          <button 
            onClick={resetToSystem}
            className="demo-button secondary"
          >
            Resetar
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h4>Exemplo de Cores</h4>
        <div className="color-palette">
          <div className="color-item primary">
            <span className="color-name">Primária</span>
            <div className="color-box" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
          </div>
          <div className="color-item secondary">
            <span className="color-name">Secundária</span>
            <div className="color-box" style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
          </div>
          <div className="color-item background">
            <span className="color-name">Fundo</span>
            <div className="color-box" style={{ backgroundColor: 'var(--bg-primary)' }}></div>
          </div>
          <div className="color-item card">
            <span className="color-name">Card</span>
            <div className="color-box" style={{ backgroundColor: 'var(--bg-card)' }}></div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h4>Informações Técnicas</h4>
        <div className="tech-info">
          <pre>{JSON.stringify(themeInfo, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;
