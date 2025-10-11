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
            Sou um profissional em transição de carreira para a área de Desenvolvimento de Software, atualmente cursando <span>Análise e Desenvolvimento de Sistemas.</span><br></br>
            Domino tecnologias como <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>TypeScript</span>, <span>React</span>, <span>Node.js</span> e <span>Git/GitHub</span>, além de possuir uma base sólida em lógica de programação, boas práticas de desenvolvimento web e versionamento de código.
            Tenho um perfil analítico e colaborativo, com foco em entregar soluções eficientes, seguras e de fácil manutenção.<br></br>
            Sou movido por desafios e estou sempre em busca de aprimorar minhas habilidades, explorar novas ferramentas e contribuir com projetos que unam inovação e propósito.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
