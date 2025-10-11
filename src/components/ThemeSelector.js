import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = ({ showAdvanced = false }) => {
  const { 
    isDarkMode, 
    themeMode, 
    systemTheme, 
    isSystemTheme,
    toggleTheme, 
    setTheme, 
    resetToSystem,
    getThemeInfo 
  } = useTheme();
  
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    setIsOpen(false);
  };

  const themeOptions = [
    { 
      value: 'light', 
      label: 'Claro', 
      icon: '☀️',
      description: 'Tema claro'
    },
    { 
      value: 'dark', 
      label: 'Escuro', 
      icon: '🌙',
      description: 'Tema escuro'
    },
    { 
      value: 'system', 
      label: 'Sistema', 
      icon: '⚙️',
      description: `Segue preferência do sistema (${systemTheme === 'dark' ? 'Escuro' : 'Claro'})`
    }
  ];

  if (!showAdvanced) {
    return (
      <button 
        className={`theme-toggle-simple ${isDarkMode ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={`Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
        title={`Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
        type="button"
        role="switch"
        aria-checked={isDarkMode}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <div className="toggle-icon">
              {isDarkMode ? '☀️' : '🌙'}
            </div>
          </div>
        </div>
        <span className="sr-only">
          Tema atual: {isDarkMode ? 'Escuro' : 'Claro'}
          {isSystemTheme && ' (Sistema)'}
        </span>
      </button>
    );
  }

  return (
    <div className="theme-selector">
      <button 
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar tema"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <span className="current-theme-icon">
          {themeMode === 'system' ? '⚙️' : (isDarkMode ? '🌙' : '☀️')}
        </span>
        <span className="current-theme-label">
          {themeOptions.find(opt => opt.value === themeMode)?.label || 'Tema'}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="theme-selector-dropdown" role="listbox">
          <div className="theme-selector-header">
            <h3>Selecionar Tema</h3>
            <button 
              className="close-dropdown"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar seletor de tema"
              type="button"
            >
              ×
            </button>
          </div>
          
          <div className="theme-options">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                className={`theme-option ${themeMode === option.value ? 'selected' : ''}`}
                onClick={() => handleThemeChange(option.value)}
                role="option"
                aria-selected={themeMode === option.value}
                type="button"
              >
                <span className="theme-icon">{option.icon}</span>
                <div className="theme-info">
                  <span className="theme-label">{option.label}</span>
                  <span className="theme-description">{option.description}</span>
                </div>
                {themeMode === option.value && (
                  <span className="selected-indicator">✓</span>
                )}
              </button>
            ))}
          </div>

          {isSystemTheme && (
            <div className="system-theme-info">
              <p>
                <strong>Tema do sistema:</strong> {systemTheme === 'dark' ? 'Escuro' : 'Claro'}
              </p>
              <p className="system-hint">
                O tema mudará automaticamente conforme a configuração do seu sistema operacional.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div 
          className="theme-selector-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ThemeSelector;
