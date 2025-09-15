import React, { useState } from "react";
import "./Projetos.css";

// Array de projetos com caminho correto das imagens (pasta public/img)
const projetos = [
  {
    titulo: "Alurabook",
    descricao: "Um site moderno e responsivo para a venda de e-books, desenvolvido como parte de um curso na Alura.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "/img/Captura de tela 2024-12-18 192847.png",
    github: "#",
    demo: "#",
  },
  {
    titulo: "Alura+",
    descricao: "Landing page desenvolvida para reforçar conceitos de HTML, CSS e boas práticas de front-end.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "/img/Captura de tela 2024-12-18 192531.png",
    github: "https://github.com/Abderson/Aluraplus",
    demo: "https://aluraplus-two-orpin.vercel.app/",
  },
  {
    titulo: "Tesla",
    descricao: "Recriação de uma página inspirada na Tesla, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "/img/Captura de tela 2024-12-16 185536.png",
    github: "https://github.com/Abderson/tesla",
    demo: "https://tesla-one-rouge.vercel.app/",
  },
  {
    titulo: "PrimeFlix",
    descricao: "Site de um ecommerce de filmes, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    imagem: "/img/Prime_flix.png",
    github: "https://github.com/Abderson/primeflix",
    demo: "https://prime-flix-sigma-bice.vercel.app/",
  },

  {
    titulo: "clone do instagram",
    descricao: "clone do instagram, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    imagem: "/img/instagram.png",
    github: "https://github.com/Abderson/instagram-clone",
    demo: "https://instagram-clone-six-gold.vercel.app/"
  },
  {
    titulo: "PrimeFlix",
    descricao: "Site de um ecommerce de filmes, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    imagem: "/img/Prime_flix.png",
    github: "https://github.com/Abderson/primeflix",
    demo: "https://prime-flix-sigma-bice.vercel.app/",
  },
];

function Projetos() {
  const [modal, setModal] = useState(null);

  // Abre o modal do projeto selecionado
  const openModal = (idx) => setModal(idx);
  // Fecha o modal
  const closeModal = () => setModal(null);

  // Duplica os projetos para criar o efeito infinito
  const projetosDuplicados = [...projetos, ...projetos];

  return (
    <section id="projetos" className="cards-projetos" data-aos="fade-left">
      <h2 className="projetos-section-title">Meus Projetos</h2>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {projetosDuplicados.map((projeto, idx) => (
            <article className="card-projeto" key={idx} onClick={() => openModal(idx % projetos.length)}>
              <div className="card-img-wrapper">
                <img src={projeto.imagem} alt={"Print do projeto " + projeto.titulo} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{projeto.titulo}</h3>
                <p className="card-descricao">{projeto.descricao}</p>
                <p className="card-tecnologias">
                  <strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}
                </p>
                <div className="card-links">
                  <a href={projeto.demo} className="btn-projeto" target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </a>
                  <a href={projeto.github} className="btn-projeto" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de detalhes do projeto */}
      {modal !== null && (
        <div className="modal-projetos" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Fechar">×</button>
            <h2 style={{ color: "#61dafb", textAlign: "center" }}>{projetos[modal].titulo}</h2>
            <img src={projetos[modal].imagem} alt={"Print do projeto " + projetos[modal].titulo} />
            <p style={{ color: "#61dafb", textAlign: "center" }}>{projetos[modal].descricao}</p>
            <p style={{ color: "#61dafb", textAlign: "center" }}><strong>Tecnologias:</strong> {projetos[modal].tecnologias.join(", ")}</p>
            <div className="modal-links">
              <a href={projetos[modal].demo} className="btn-projeto" target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
              <a href={projetos[modal].github} className="btn-projeto" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projetos;
