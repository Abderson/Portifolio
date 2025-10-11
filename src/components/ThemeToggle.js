import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ showAdvanced = false }) => {
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ),
      description: 'Tema claro'
    },
    { 
      value: 'dark', 
      label: 'Escuro', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ),
      description: 'Tema escuro'
    },
    { 
      value: 'system', 
      label: 'Sistema', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M9 9h6v6H9z"/>
        </svg>
      ),
      description: `Segue preferência do sistema (${systemTheme === 'dark' ? 'Escuro' : 'Claro'})`
    }
  ];

  if (!showAdvanced) {
    return (
      <button 
        className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
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
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
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
    <div className="theme-toggle-advanced">
      <button 
        className="theme-toggle-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar tema"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <div className="current-theme-icon">
          {themeMode === 'system' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M9 9h6v6H9z"/>
            </svg>
          ) : (isDarkMode ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          ))}
        </div>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="theme-toggle-dropdown" role="listbox">
          <div className="dropdown-header">
            <h4>Tema</h4>
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
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div 
          className="theme-toggle-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
