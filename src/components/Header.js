import React, { useState, useEffect } from 'react';
import './Header.css';
import SEOHead from './SEOHead';
import SchemaMarkup from './SchemaMarkup';
import fundoHeader from '../img/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg';

function Header() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Olá, Seja bem vindo😎";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Velocidade da digitação (100ms por caractere)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
        className="header"
        data-aos="fade-down"
        role="banner"
        aria-label="Cabeçalho principal do portfólio"
        style={{
          backgroundImage: `url(${fundoHeader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="typewriter">
          <h1>
            {displayedText}
            <span className="cursor" aria-hidden="true">|</span>
          </h1>
          <p>Aqui você encontra várias soluções para o seu negócio</p>
          <a 
            href="#projetos" 
            className="botao_projetos"
            aria-label="Ver meus projetos de desenvolvimento"
          >
            <button type="button">Veja meus Projetos 👇</button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
