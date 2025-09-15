import React from "react";
import './Sobre.css';
import fotoEscritorio from '../img/foto_escritorio.jpg';

function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <h2>Sobre Mim</h2>
      <div className="sobre-content" data-aos="fade-up">
        <div className="foto_perfil">
          <img src={fotoEscritorio} alt="Foto do ambiente de trabalho" className="foto_escritorio" />
        </div>
        <div className="texto_container" data-aos="fade-left">
          <p className="texto_sobre_min">
            Sou um profissional em transição de carreira para a área de desenvolvimento de software, atualmente cursando Análise e Desenvolvimento de Sistemas.<br />
            Tenho experiência sólida em HTML, CSS e JavaScript, além de uma base em lógica de programação e boas práticas de desenvolvimento web.<br />
            Motivado por desafios, busco oportunidades para criar soluções eficientes e inovadoras, sempre comprometido com aprendizado contínuo e evolução técnica.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
