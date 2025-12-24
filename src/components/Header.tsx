import React, { useState, useEffect } from 'react';
import './Header.css';
import SEOHead from './SEOHead';
import SchemaMarkup from './SchemaMarkup';
import fundoHeader from '../img/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg';



const Header: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  const phrases = [
    "Desenvolvedor Full Stack",
    "Criando Soluções Digitais",
    "Transformando Ideias em Código",
    "Inovação & Tecnologia"
  ];



  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentPhrase.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Anderson Ferreira - Desenvolvedor Full Stack"
        description="Desenvolvedor Full Stack especializado em React, Node.js, JavaScript e tecnologias modernas. Ofereço soluções completas para seu negócio digital."
        keywords="desenvolvedor, full stack, react, node.js, javascript, frontend, backend, portfolio, projetos, soluções digitais"
        image="/img/foto-perfil-fundo-branco.png"
      />
      <SchemaMarkup type="Person" />

      <header
        id="inicio"
        className="header"
        role="banner"
        aria-label="Cabeçalho principal do portfólio"
        style={{
          backgroundImage: `url(${fundoHeader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay Gradient */}
        <div className="header-overlay"></div>

        {/* Particles Background */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{ animationDelay: `${i * 0.5}s` }}></div>
          ))}
        </div>

        {/* Social Links */}


        {/* Main Content */}
        <div className="header-content" data-aos="fade-up">
          {/* Status Badge */}
          <div className="status-badge" data-aos="zoom-in">
            <span className="pulse"></span>
            Disponível para projetos
          </div>

          <h1 data-aos="fade-down" data-aos-delay="200">
            Olá, Seja bem vindo 👋
          </h1>

          <div className="rotating-text" data-aos="fade-up" data-aos-delay="400">
            <span className="label">Eu sou</span>
            <span className="phrase">
              {displayedText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="subtitle" data-aos="fade-up" data-aos-delay="600">
            Transformo suas ideias em soluções digitais inovadoras e eficientes
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="800">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('projetos')}
              aria-label="Ver meus projetos"
            >
              <i className="fas fa-code"></i>
              Ver Projetos
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection('contato')}
              aria-label="Entrar em contato"
            >
              <i className="fas fa-envelope"></i>
              Entre em Contato
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Role para explorar</p>
        </div>
      </header>
    </>
  );
};

export default Header;
