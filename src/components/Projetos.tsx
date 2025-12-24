import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectSkeleton from "./ProjectSkeleton";
import SEOHead from "./SEOHead";
import SchemaMarkup from "./SchemaMarkup";
import { Project } from "../types";
import "./Projetos.css";

const projetos: Project[] = [
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
    titulo: "Clone do Instagram",
    descricao: "Clone do Instagram, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    imagem: "/img/instagram.png",
    github: "https://github.com/Abderson/instagram-clone",
    demo: "https://instagram-clone-six-gold.vercel.app/"
  },
  {
    titulo: "Bolsas de Maternidade Personalizadas",
    descricao: "Site de um ecommerce de bolsas de maternidade, com foco em tecnologia avançada e design moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap"],
    imagem: "/img/projeto-atelie.png",
    github: "https://github.com/Abderson/projeto_jeniffer_lopes",
    demo: "https://jeniffer-lopes.vercel.app/",
  },

  {
    titulo: "Calculadora de combustivel",
    descricao: " Uma calculadora para estimar qual combustivel é mais econômico para o seu veículo.",
    tecnologias: ["React", "Node.js", "vite.js", "typescript", "CSS"],
    imagem: "/public/img/calculadora-combustivel.png",
    github: "https://github.com/Abderson/calculadora_Combustivel",
    demo: "https://calculadora-combustivel-six.vercel.app/",
  },

  {
    titulo: "Agenda de Compromissos",
    descricao: " Uma aplicação web para gerenciar compromissos e tarefas diárias de forma eficiente.",
    tecnologias: ["React", "JavaScript", "typescript", "CSS",],
    imagem: "/public/img/agenda-compromisso.png",
    github: "https://github.com/Abderson/AGENDA-COMPROMISSOS ",
    demo: "https://agenda-compromissos-zeta.vercel.app",
  },
];


const Projetos: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filtroAtivo, setFiltroAtivo] = useState<string>("Todos");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Extrai todas as tecnologias únicas
  const tecnologiasUnicas = useMemo(() => {
    const techs = new Set<string>();
    projetos.forEach(projeto => {
      projeto.tecnologias.forEach(tech => techs.add(tech));
    });
    return ["Todos", ...Array.from(techs).sort()];
  }, []);

  // Filtra projetos baseado no filtro ativo
  const projetosFiltrados = useMemo(() => {
    if (filtroAtivo === "Todos") return projetos;
    return projetos.filter(projeto =>
      projeto.tecnologias.includes(filtroAtivo)
    );
  }, [filtroAtivo]);

  const openModal = (idx: number): void => setModal(idx);
  const closeModal = (): void => setModal(null);

  return (
    <>
      <SEOHead
        title="Portfólio de Projetos - Anderson Ferreira"
        description="Explore meus projetos de desenvolvimento web, incluindo Alurabook, Alura+, Tesla, PrimeFlix e outros projetos full stack com React, Node.js e JavaScript."
        keywords="projetos, desenvolvimento, react, node.js, javascript, portfolio, alurabook, tesla, primeflix"
      />
      <SchemaMarkup type="Portfolio" />

      <section
        id="projetos"
        className="cards-projetos"
        data-aos="fade-up"
        role="region"
        aria-labelledby="projetos-title"
      >
        <div className="projetos-header">
          <h2 id="projetos-title" className="projetos-section-title">
            Meus Projetos
          </h2>
          <p className="projetos-subtitle">
            Explore meu trabalho e as tecnologias que utilizo
          </p>
        </div>

        {/* Filtros de Tecnologia */}
        <div className="filtros-container" role="group" aria-label="Filtrar projetos por tecnologia">
          {tecnologiasUnicas.map((tech) => (
            <button
              key={tech}
              className={`filtro-btn ${filtroAtivo === tech ? 'active' : ''}`}
              onClick={() => setFiltroAtivo(tech)}
              aria-pressed={filtroAtivo === tech}
              aria-label={`Filtrar projetos por ${tech}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        {isLoading ? (
          <div className="projetos-grid">
            <ProjectSkeleton count={8} />
          </div>
        ) : (
          <>
            {projetosFiltrados.length > 0 ? (
              <div className="projetos-grid" role="list" aria-label="Lista de projetos">
                {projetosFiltrados.map((projeto, idx) => (
                  <article
                    className="card-projeto"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    role="listitem"
                  >
                    <div className="card-img-wrapper">
                      <img
                        src={projeto.imagem}
                        alt={`Captura de tela do projeto ${projeto.titulo}`}
                        className="card-img"
                        loading="lazy"
                      />
                      <div className="card-overlay">
                        <button
                          className="btn-detalhes"
                          onClick={() => openModal(projetos.indexOf(projeto))}
                          aria-label={`Ver detalhes do projeto ${projeto.titulo}`}
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title">{projeto.titulo}</h3>
                      <p className="card-descricao">{projeto.descricao}</p>

                      <div className="card-tecnologias">
                        <div className="tech-badges">
                          {projeto.tecnologias.slice(0, 3).map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                          ))}
                          {projeto.tecnologias.length > 3 && (
                            <span className="tech-badge more">+{projeto.tecnologias.length - 3}</span>
                          )}
                        </div>
                      </div>

                      <div className="card-links" role="group" aria-label="Links do projeto">
                        <a
                          href={projeto.demo}
                          className="btn-projeto btn-demo"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver projeto ${projeto.titulo} em uma nova aba`}
                        >
                          <span className="btn-icon">🚀</span>
                          Demo
                        </a>
                        <a
                          href={projeto.github}
                          className="btn-projeto btn-github"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver código fonte do projeto ${projeto.titulo} no GitHub`}
                        >
                          <span className="btn-icon">💻</span>
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>Nenhum projeto encontrado com essa tecnologia.</p>
              </div>
            )}
          </>
        )}

        {/* Modal de Detalhes */}
        {modal !== null && (
          <div
            className="modal-projetos"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Fechar modal"
                type="button"
              >
                ✕
              </button>

              <div className="modal-header">
                <h2 id="modal-title" className="modal-title">
                  {projetos[modal].titulo}
                </h2>
              </div>

              <div className="modal-body">
                <div className="modal-img-wrapper">
                  <img
                    src={projetos[modal].imagem}
                    alt={`Projeto ${projetos[modal].titulo}`}
                    className="modal-img"
                  />
                </div>

                <p className="modal-descricao">
                  {projetos[modal].descricao}
                </p>

                <div className="modal-tech-section">
                  <h3 className="modal-tech-title">Tecnologias Utilizadas</h3>
                  <div className="modal-tech-list">
                    {projetos[modal].tecnologias.map((tech, index) => (
                      <span key={index} className="modal-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a
                    href={projetos[modal].demo}
                    className="modal-btn modal-btn-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver projeto ${projetos[modal].titulo}`}
                  >
                    🚀 Ver Projeto
                  </a>
                  <a
                    href={projetos[modal].github}
                    className="modal-btn modal-btn-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código no GitHub`}
                  >
                    💻 Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="certificados-cta">
          <Link
            to="/certificados"
            className="btn-certificados"
            aria-label="Ver meus certificados"
          >
            📜 Ver Meus Certificados
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projetos;