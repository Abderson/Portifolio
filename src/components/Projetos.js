import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ProjectSkeleton from "./ProjectSkeleton";
import SEOHead from "./SEOHead";
import SchemaMarkup from "./SchemaMarkup";
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
    titulo: "Bolsas de Maternidade Personalizadas e Exclusivas",
    descricao: "Site de um ecommerce de bolsas de maternidade, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap"],
    imagem: "/img/projeto-atelie.png",
    github: "https://github.com/Abderson/projeto_jeniffer_lopes",
    demo: "https://jeniffer-lopes.vercel.app/",
  },
];

function Projetos() {
  const [modal, setModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Simula carregamento das imagens
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Conta imagens carregadas
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  // Abre o modal do projeto selecionado
  const openModal = (idx) => setModal(idx);
  // Fecha o modal
  const closeModal = () => setModal(null);

  // Duplica os projetos para criar o efeito infinito
  const projetosDuplicados = [...projetos, ...projetos];

  return (
    <>
      <SEOHead 
        title="Projetos - Anderson Ferreira"
        description="Explore meus projetos de desenvolvimento web, incluindo Alurabook, Alura+, Tesla, PrimeFlix e outros projetos full stack com React, Node.js e JavaScript."
        keywords="projetos, desenvolvimento, react, node.js, javascript, portfolio, alurabook, tesla, primeflix"
      />
      <SchemaMarkup type="Portfolio" />
      
      <section 
        id="projetos" 
        className="cards-projetos" 
        data-aos="fade-left"
        role="region"
        aria-labelledby="projetos-title"
      >
        <h2 id="projetos-title" className="projetos-section-title">Meus Projetos</h2>
      
      {isLoading ? (
        <div className="carousel-container">
          <ProjectSkeleton count={6} />
        </div>
      ) : (
        <div className="carousel-container" role="group" aria-label="Carrossel de projetos">
          <div className="carousel-track" role="list" aria-label="Lista de projetos">
            {projetosDuplicados.map((projeto, idx) => (
              <article 
                className="card-projeto" 
                key={idx} 
                onClick={() => openModal(idx % projetos.length)}
                role="listitem"
                tabIndex="0"
                aria-label={`Projeto ${projeto.titulo}. Clique para ver detalhes.`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(idx % projetos.length);
                  }
                }}
              >
                <div className="card-img-wrapper">
                  <img 
                    src={projeto.imagem} 
                    alt={`Captura de tela do projeto ${projeto.titulo}, mostrando a interface do usuário desenvolvida com ${projeto.tecnologias.slice(0, 3).join(', ')}`}
                    className="card-img" 
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                </div>
              <div className="card-content">
                <h3 className="card-title">{projeto.titulo}</h3>
                <p className="card-descricao" style={{ textAlign: "center" }}>{projeto.descricao}</p>
                <div className="card-tecnologias">
                  <div className="tech-badges">
                    {projeto.tecnologias.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                    {projeto.tecnologias.length > 4 && (
                      <span className="tech-badge more">+{projeto.tecnologias.length - 4}</span>
                    )}
                  </div>
                </div>
                <div className="card-links" role="group" aria-label="Links do projeto">
                  <a 
                    href={projeto.demo} 
                    className="btn-projeto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Ver projeto ${projeto.titulo} em uma nova aba`}
                  >
                    Ver Projeto
                  </a>
                  <a 
                    href={projeto.github} 
                    className="btn-projeto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Ver código fonte do projeto ${projeto.titulo} no GitHub em uma nova aba`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      )}

      {/* Modal de detalhes do projeto */}
      {modal !== null && (
        <div 
          className="modal-projetos" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={closeModal} 
              aria-label="Fechar modal de detalhes do projeto"
              type="button"
            >
              ×
            </button>
            <h2 id="modal-title" style={{ color: "#61dafb", textAlign: "center" }}>
              {projetos[modal].titulo}
            </h2>
            <img 
              src={projetos[modal].imagem} 
              alt={`Captura de tela detalhada do projeto ${projetos[modal].titulo}, mostrando a interface completa desenvolvida com ${projetos[modal].tecnologias.join(', ')}`}
            />
            <p id="modal-description" style={{ color: "#61dafb", textAlign: "center" }}>
              {projetos[modal].descricao}
            </p>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <p style={{ color: "#61dafb", marginBottom: "0.5rem", fontWeight: "600" }}>
                Tecnologias utilizadas:
              </p>
              <div 
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}
                role="list"
                aria-label="Lista de tecnologias utilizadas no projeto"
              >
                {projetos[modal].tecnologias.map((tech, index) => (
                  <span 
                    key={index} 
                    role="listitem"
                    style={{
                      background: "rgba(97, 218, 251, 0.15)",
                      color: "#61dafb",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      border: "1px solid rgba(97, 218, 251, 0.3)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-links" role="group" aria-label="Links do projeto">
              <a 
                href={projetos[modal].demo} 
                className="btn-projeto" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${projetos[modal].titulo} em uma nova aba`}
              >
                Ver Projeto
              </a>
              <a 
                href={projetos[modal].github} 
                className="btn-projeto" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver código fonte do projeto ${projetos[modal].titulo} no GitHub em uma nova aba`}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Botão para ir aos certificados */}
      <div className="certificados-cta">
        <Link 
          to="/certificados" 
          className="btn-certificados"
          aria-label="Ver meus certificados de cursos e formações"
        >
          Ver Meus Certificados
          
          
          
          
        </Link>
      </div>
    </section>
    </>
  );
}

export default Projetos;
