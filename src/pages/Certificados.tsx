import React, { useState, useMemo } from "react";
import { Certificate } from "../types";
import "./Certificados.css";

interface CertificadoExtended extends Certificate {
  categoria: string;
}

const certificados: CertificadoExtended[] = [
  {
    id: 1,
    titulo: "JavaScript: métodos de array",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/Captura de tela 2025-10-11 112836.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/javascript-metodos-array/certificate",
    categoria: "JavaScript"
  },
  {
    id: 2,
    titulo: "JavaScript: entendendo promises e async/await",
    instituicao: "Alura",
    data: "2024",
    imagem: "/img/certificados/certificado_2.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/javascript-entendendo-promises-async-await/certificate",
    categoria: "JavaScript"
  },
  {
    id: 3,
    titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
    instituicao: "Alura",
    data: "2024",
    imagem: "/img/certificados/certificado_3.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-ambiente-arquivos-tags/certificate",
    categoria: "HTML/CSS"
  },
  {
    id: 4,
    titulo: "JavaScript: construindo páginas dinâmicas",
    instituicao: "Alura",
    data: "2024",
    imagem: "/img/certificados/certificado_4.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/construindo-paginas-dinamicas-javascript/certificate",
    categoria: "JavaScript"
  },
  {
    id: 5,
    titulo: "Lógica de programação: praticando com desafios",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_5.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-praticando-desafios/certificate",
    categoria: "Lógica"
  },
  {
    id: 6,
    titulo: "Gestão Ágil: explorando conceitos da agilidade",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_6.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/gestao-agil-conceitos-agilidade/certificate",
    categoria: "Gestão"
  },
  {
    id: 7,
    titulo: "Git e GitHub: compartilhando e colaborando em projetos",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_7.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/git-github-compartilhando-colaborando-projetos/certificate",
    categoria: "Ferramentas"
  },
  {
    id: 8,
    titulo: "Lógica de programação: explore funções e listas",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_8.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-funcoes-listas/certificate",
    categoria: "Lógica"
  },
  {
    id: 9,
    titulo: "Lógica de programação: mergulhe em programação com JavaScript",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_9.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-mergulhe-programacao-javascript/certificate",
    categoria: "Lógica"
  },
  {
    id: 10,
    titulo: "HTML e CSS: responsividade com mobile-first e grid",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_10.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-responsividade-mobile-first/certificate",
    categoria: "HTML/CSS"
  },
  {
    id: 11,
    titulo: "Começando em Programação: carreira e primeiros passos",
    instituicao: "Alura",
    data: "2025",
    imagem: "/img/certificados/certificado_11.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/comecando-programacao-carreira-primeiros-passos/certificate",
    categoria: "Carreira"
  },
  {
    id: 12,
    titulo: "HTML e CSS: Classes, posicionamento e Flexbox",
    instituicao: "Alura",
    data: "2024",
    imagem: "/img/certificados/certificado_12.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-classes-posicionamento-flexbox/certificate",
    categoria: "HTML/CSS"
  },
  {
    id: 13,
    titulo: "Assistente de Programação.",
    instituicao: "Fasul Educacional",
    data: "2024",
    imagem: "/img/certificados/certificado_13.png",
    link: "#",
    categoria: "Carreira"
  },
];

const Certificados: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [instituicaoFilter, setInstituicaoFilter] = useState<string>("Todas");
  const [categoriaFilter, setCategoriaFilter] = useState<string>("Todas");

  const openModal = (idx: number): void => setModal(idx);
  const closeModal = (): void => setModal(null);

  // Filtros únicos
  const instituicoes = ["Todas", ...Array.from(new Set(certificados.map(c => c.instituicao)))];
  const categorias = ["Todas", ...Array.from(new Set(certificados.map(c => c.categoria)))];

  // Certificados filtrados
  const certificadosFiltrados = useMemo(() => {
    return certificados.filter(cert => {
      const matchSearch = cert.titulo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchInstituicao = instituicaoFilter === "Todas" || cert.instituicao === instituicaoFilter;
      const matchCategoria = categoriaFilter === "Todas" || cert.categoria === categoriaFilter;
      return matchSearch && matchInstituicao && matchCategoria;
    });
  }, [searchTerm, instituicaoFilter, categoriaFilter]);

  // Stats
  const stats = {
    total: certificados.length,
    recentes: certificados.filter(c => c.data === "2025").length,
    instituicoes: new Set(certificados.map(c => c.instituicao)).size
  };

  const getCategoriaColor = (categoria: string): string => {
    const colors: { [key: string]: string } = {
      "JavaScript": "#f7df1e",
      "HTML/CSS": "#e44d26",
      "Lógica": "#4ecdc4",
      "Ferramentas": "#f05032",
      "Gestão": "#9b59b6",
      "Carreira": "#61dafb"
    };
    return colors[categoria] || "#61dafb";
  };

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="certificados-title" data-aos="fade-down">Certificações & Cursos</h2>

        {/* Stats Cards */}
        <div className="stats-certificates" data-aos="fade-up">
          <div className="stat-cert-card">
            <div className="stat-cert-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="stat-cert-info">
              <span className="stat-cert-value">{stats.total}</span>
              <span className="stat-cert-label">Certificados</span>
            </div>
          </div>
          <div className="stat-cert-card">
            <div className="stat-cert-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="stat-cert-info">
              <span className="stat-cert-value">{stats.recentes}</span>
              <span className="stat-cert-label">Em 2025</span>
            </div>
          </div>
          <div className="stat-cert-card">
            <div className="stat-cert-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="stat-cert-info">
              <span className="stat-cert-value">{stats.instituicoes}</span>
              <span className="stat-cert-label">Instituições</span>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="filters-section" data-aos="fade-up" data-aos-delay="100">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Buscar certificado..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm("")}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="filter-buttons">
            <div className="filter-group">
              <label>Instituição:</label>
              <div className="filter-options">
                {instituicoes.map((inst) => (
                  <button
                    key={inst}
                    className={`filter-btn ${instituicaoFilter === inst ? 'active' : ''}`}
                    onClick={() => setInstituicaoFilter(inst)}
                  >
                    {inst}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Categoria:</label>
              <div className="filter-options">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${categoriaFilter === cat ? 'active' : ''}`}
                    onClick={() => setCategoriaFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info" data-aos="fade-up" data-aos-delay="200">
          <p>
            <i className="fas fa-filter"></i>
            Mostrando {certificadosFiltrados.length} de {certificados.length} certificados
          </p>
        </div>

        {/* Certificados Grid */}
        <div className="certificados-grid">
          {certificadosFiltrados.map((certificado, idx) => (
            <article
              className="certificado-card"
              key={certificado.id}
              onClick={() => openModal(certificados.indexOf(certificado))}
              data-aos="zoom-in"
              data-aos-delay={idx * 50}
            >
              <div className="certificado-img-wrapper">
                <img
                  src={certificado.imagem}
                  alt={`Certificado ${certificado.titulo}`}
                  className="certificado-img"
                />
                <div className="certificado-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className="certificado-content">
                <div className="certificado-badges">
                  <span
                    className="badge-categoria"
                    style={{ backgroundColor: getCategoriaColor(certificado.categoria) }}
                  >
                    {certificado.categoria}
                  </span>
                  <span className="badge-ano">{certificado.data}</span>
                </div>
                <h3 className="certificado-titulo">{certificado.titulo}</h3>
                <p className="certificado-instituicao">
                  <i className="fas fa-building"></i>
                  {certificado.instituicao}
                </p>
              </div>
            </article>
          ))}
        </div>

        {certificadosFiltrados.length === 0 && (
          <div className="no-results" data-aos="fade-up">
            <i className="fas fa-search"></i>
            <p>Nenhum certificado encontrado com os filtros selecionados.</p>
            <button
              className="btn-reset-filters"
              onClick={() => {
                setSearchTerm("");
                setInstituicaoFilter("Todas");
                setCategoriaFilter("Todas");
              }}
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Modal */}
        {modal !== null && (
          <div className="modal-certificados" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Fechar">
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-header">
                <h2 className="modal-titulo">{certificados[modal].titulo}</h2>
                <span
                  className="modal-badge"
                  style={{ backgroundColor: getCategoriaColor(certificados[modal].categoria) }}
                >
                  {certificados[modal].categoria}
                </span>
              </div>

              <img
                src={certificados[modal].imagem}
                alt={`Certificado ${certificados[modal].titulo}`}
                className="modal-img"
              />

              <div className="modal-info">
                <div className="modal-info-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Instituição</strong>
                    <p>{certificados[modal].instituicao}</p>
                  </div>
                </div>
                <div className="modal-info-item">
                  <i className="fas fa-calendar"></i>
                  <div>
                    <strong>Ano de Conclusão</strong>
                    <p>{certificados[modal].data}</p>
                  </div>
                </div>
                <div className="modal-info-item">
                  <i className="fas fa-tag"></i>
                  <div>
                    <strong>Categoria</strong>
                    <p>{certificados[modal].categoria}</p>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={certificados[modal].link}
                  className="btn-modal-action primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Verificar Certificado
                </a>
                <button
                  className="btn-modal-action secondary"
                  onClick={() => window.print()}
                >
                  <i className="fas fa-download"></i>
                  Baixar
                </button>
                <button
                  className="btn-modal-action secondary"
                  onClick={() => {
                    if (modal !== null && certificados[modal]?.link) {
                      navigator.clipboard.writeText(certificados[modal].link);
                      alert('Link copiado!');
                    }
                  }}
                >
                  <i className="fas fa-share-alt"></i>
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificados;
