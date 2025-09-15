import React, { useState, useEffect } from 'react';
import './Header.css';
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
    <header
      className="header"
      data-aos="fade-down"
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
          <span className="cursor">|</span>
        </h1>
        <p>Aqui você encontra várias soluções para o seu negócio</p>
        <a href="#projetos" className="botao_projetos">
          <button>Veja meus Projetos 👇</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
