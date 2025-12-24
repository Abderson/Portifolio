import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const location = useLocation();

  // Detecta scroll para adicionar efeito no navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta seção ativa baseado no scroll
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ["inicio", "sobre", "projetos", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const closeMenu = (): void => {
    setOpen(false);
  };

  const isActive = (section: string): boolean => {
    if (location.pathname === "/certificados" && section === "certificados") {
      return true;
    }
    return location.pathname === "/" && activeSection === section;
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        data-aos="fade-down"
        role="navigation"
        aria-label="Navegação principal"
      >
        <Link to="/" className="logo" role="banner" onClick={closeMenu}>
          <span className="logo-text">Anderson</span>
          <span className="logo-accent">Ferreira</span>
        </Link>

        <ul
          id="navigation-menu"
          className={`nav-links ${open ? "open" : ""}`}
          role="menubar"
        >
          <li role="none">
            <Link
              to="/"
              onClick={closeMenu}
              className={`nav-link ${isActive("inicio") ? "active" : ""}`}
              role="menuitem"
              aria-label="Ir para página inicial"
            >
              <span className="nav-icon">🏠</span>
              <span>Início</span>
            </Link>
          </li>
          <li role="none">
            <a
              href="#sobre"
              onClick={closeMenu}
              className={`nav-link ${isActive("sobre") ? "active" : ""}`}
              role="menuitem"
              aria-label="Ir para seção sobre mim"
            >
              <span className="nav-icon">👨‍💻</span>
              <span>Sobre</span>
            </a>
          </li>
          <li role="none">
            <a
              href="#projetos"
              onClick={closeMenu}
              className={`nav-link ${isActive("projetos") ? "active" : ""}`}
              role="menuitem"
              aria-label="Ir para seção de projetos"
            >
              <span className="nav-icon">💼</span>
              <span>Projetos</span>
            </a>
          </li>
          <li role="none">
            <Link
              to="/certificados"
              onClick={closeMenu}
              className={`nav-link ${isActive("certificados") ? "active" : ""}`}
              role="menuitem"
              aria-label="Ver meus certificados"
            >
              <span className="nav-icon">🎓</span>
              <span>Certificados</span>
            </Link>
          </li>
          <li role="none">
            <a
              href="#contato"
              onClick={closeMenu}
              className={`nav-link ${isActive("contato") ? "active" : ""}`}
              role="menuitem"
              aria-label="Ir para seção de contato"
            >
              <span className="nav-icon">📧</span>
              <span>Contato</span>
            </a>
          </li>
        </ul>

        <button
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navigation-menu"
          type="button"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Overlay para fechar o menu ao clicar fora */}
      {open && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Nav;
