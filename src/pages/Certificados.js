import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Removido temporariamente - não está sendo usado
import "./Certificados.css";

// Array de certificados
const certificados = [
  {
    titulo: "JavaScript: métodos de array",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo de JavaScript abordando métodos de array.",
    imagem: "/img/certificados/Captura de tela 2025-10-11 112836.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/javascript-metodos-array/certificate", // Link para visualizar o certificado online
    
  },
  {
    titulo: "JavaScript: entendendo promises e async/await",
    instituicao: "Alura",
    data: "2024",
    descricao: "Curso avançado de JavaScript focado em promises e async/await.",
    imagem: "/img/certificados/certificado_2.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/javascript-entendendo-promises-async-await/certificate",
  },
  {
    titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
    instituicao: "Rocketseat",
    data: "2024",
    descricao: "Desenvolvimento de interfaces web com HTML e CSS.",
    imagem: "/img/certificados/certificado_3.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-ambiente-arquivos-tags/certificate",
  },

  {
    titulo: "JavaScript: construindo páginas dinâmicas",
    instituicao: "Alura",
    data: "2024",
    descricao: "Curso completo sobre JavaScript para construção de páginas dinâmicas.",
    imagem: "/img/certificados/certificado_4.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/construindo-paginas-dinamicas-javascript/certificate",
  },
  {
    titulo: "Lógica de programação: praticando com desafios",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre lógica de programação com foco em desafios práticos.",
    imagem: "/img/certificados/certificado_5.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-praticando-desafios/certificate",
  },
  {
    titulo: "Gestão Ágil: explorando conceitos da agilidade",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre Gestão Ágil com foco em práticas e ferramentas.",
    imagem: "/img/certificados/certificado_6.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/gestao-agil-conceitos-agilidade/certificate",
  },
  {
    titulo: "Git e GitHub: compartilhando e colaborando em projetos",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre Git e GitHub para controle de versão e colaboração em projetos.",
    imagem: "/img/certificados/certificado_7.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/git-github-compartilhando-colaborando-projetos/certificate",
  },
  {
    titulo: "Lógica de programação: explore funções e listas",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre lógica de programação com foco em funções e listas.",
    imagem: "/img/certificados/certificado_8.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-funcoes-listas/certificate",
  },
  {
    titulo: "Lógica de programação: mergulhe em programação com JavaScript",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre programação com JavaScript.",
    imagem: "/img/certificados/certificado_9.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/logica-programacao-mergulhe-programacao-javascript/certificate",
  },
  {
    titulo: "HTML e CSS: responsividade com mobile-first e grid",
    instituicao: "Alura",
    data: "2025",
    descricao: "Curso completo sobre HTML e CSS para criação de páginas web responsivas.",
    imagem: "/img/certificados/certificado_10.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-responsividade-mobile-first/certificate",
  },
  {
    titulo: "Começando em Programação: carreira e primeiros passos",
    instituicao: "Alura",
    data: "2025",
    descricao: "curso de introdução à programação.",
    imagem: "/img/certificados/certificado_11.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/comecando-programacao-carreira-primeiros-passos/certificate",
  },
  {
    titulo: "HTML e CSS: Classes, posicionamento e Flexbox",
    instituicao: "Alura", 
    data: "2024",
    descricao: "Curso completo sobre HTML e CSS para criação de layouts responsivos.",
    imagem: "/img/certificados/certificado_12.png",
    link: "https://cursos.alura.com.br/user/anderson2013ferreira/course/html-css-classes-posicionamento-flexbox/certificate",
  },
  {
    titulo: "Assistente de Programação.",
    instituicao: "Fasul Educacional",
    data: "2024",
    descricao: "Curso de Assistente de Programação.",
    imagem: "/img/certificados/certificado_13.png",
    link: "#",
  },
  // Adicione mais certificados conforme necessário
];

function Certificados() {
  const [modal, setModal] = useState(null);

  const openModal = (idx) => setModal(idx);
  const closeModal = () => setModal(null);

  return (
    <section id="certificados" className="certificados-section" data-aos="fade-up">
      <h2 className="certificados-title">Meus Certificados</h2>
      
      <div className="certificados-grid">
        {certificados.map((certificado, idx) => (
          <article className="certificado-card" key={idx} onClick={() => openModal(idx)}>
            <div className="certificado-img-wrapper">
              <img 
                src={certificado.imagem} 
                alt={`Certificado ${certificado.titulo}`} 
                className="certificado-img" 
              />
            </div>
            <div className="certificado-content">
              <h3 className="certificado-titulo">{certificado.titulo}</h3>
              <p className="certificado-instituicao">{certificado.instituicao}</p>
              <p className="certificado-data">{certificado.data}</p>
              <p className="certificado-descricao">{certificado.descricao}</p>
              <div className="certificado-actions">
                <button className="btn-certificado">Ver Detalhes</button>
                <a 
                  href={certificado.link} 
                  className="btn-certificado"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Verificar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de detalhes do certificado */}
      {modal !== null && (
        <div className="modal-certificados" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Fechar">×</button>
            <h2 className="modal-titulo">{certificados[modal].titulo}</h2>
            <img 
              src={certificados[modal].imagem} 
              alt={`Certificado ${certificados[modal].titulo}`}
              className="modal-img"
            />
            <div className="modal-info">
              <p><strong>Instituição:</strong> {certificados[modal].instituicao}</p>
              <p><strong>Data:</strong> {certificados[modal].data}</p>
              <p><strong>Descrição:</strong> {certificados[modal].descricao}</p>
            </div>
            <div className="modal-actions">
              <a 
                href={certificados[modal].link} 
                className="btn-certificado"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Verificar Certificado
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificados;