import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark';
  }

  // Função para fechar o menu quando clicar em um link
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav 
      className="navbar" 
      data-aos="fade-right"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="logo" role="banner">
        Anderson Ferreira
      </div>
      

      <div className="nav-controls">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
          {darkMode ? '🌙' : '☀️'}
        </button>
        <button 
          className="menu-toggle" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navigation-menu"
          type="button"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>

      <ul 
        id="navigation-menu"
        className={`nav-links ${open ? "open" : ""}`}
        role="menubar"
      >
        <li role="none">
          <Link 
            to="/" 
            onClick={closeMenu} 
            className="nav-link"
            role="menuitem"
            aria-label="Ir para página inicial"
          >
            Início
          </Link>
        </li>
        <li role="none">
          <a 
            href="#sobre" 
            onClick={closeMenu} 
            className="nav-link"
            role="menuitem"
            aria-label="Ir para seção sobre mim"
          >
            Sobre
          </a>
        </li>
        <li role="none">
          <a 
            href="#projetos" 
            onClick={closeMenu} 
            className="nav-link"
            role="menuitem"
            aria-label="Ir para seção de projetos"
          >
            Projetos
          </a>
        </li>
        <li role="none">
          <Link 
            to="/certificados" 
            onClick={closeMenu} 
            className="nav-link"
            role="menuitem"
            aria-label="Ver meus certificados"
          >
            Certificados
          </Link>
        </li>
        <li role="none">
          <a 
            href="#contato" 
            onClick={closeMenu} 
            className="nav-link"
            role="menuitem"
            aria-label="Ir para seção de contato"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
