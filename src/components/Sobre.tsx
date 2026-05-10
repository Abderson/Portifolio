import React, { useState } from "react";
import './Sobre.css';
import fotoEscritorio from '../img/foto_escritorio.jpg';

interface StatCard {
  icon: string;
  value: string;
  label: string;
}

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface SoftSkill {
  icon: string;
  title: string;
  description: string;
}

const Sobre: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  const stats: StatCard[] = [
    { icon: 'fas fa-code', value: '10+', label: 'Projetos publicados' },
    { icon: 'fas fa-layer-group', value: '8+', label: 'Tecnologias praticadas' },
    { icon: 'fas fa-certificate', value: '15+', label: 'Certificações' },
    { icon: 'fas fa-rocket', value: '2+', label: 'Anos de evolução' }
  ];

  const timeline: TimelineItem[] = [
    {
      year: '2023 - 2025',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade de Taubaté (UNITAU)',
      description: 'Formação focada em desenvolvimento de software, banco de dados, lógica, análise de requisitos e arquitetura de sistemas.'
    },
    {
      year: '2023',
      title: 'Formação Full Stack',
      institution: 'Sujeito Programador',
      description: 'Trilha prática de desenvolvimento web com HTML, CSS, JavaScript, React, Node.js, APIs e Git.'
    },
    {
      year: '2022 - 2023',
      title: 'Transição de Carreira',
      institution: 'Autônomo',
      description: 'Início dos estudos intensivos em programação, com rotina de prática, projetos próprios e publicação no GitHub.'
    }
  ];

  const softSkills: SoftSkill[] = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Pensamento Analítico',
      description: 'Capacidade de decompor problemas complexos em soluções eficientes'
    },
    {
      icon: 'fas fa-users',
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva e comunicação clara com times multidisciplinares'
    },
    {
      icon: 'fas fa-brain',
      title: 'Aprendizado Contínuo',
      description: 'Busca constante por novos conhecimentos e tecnologias emergentes'
    },
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Resolução de Problemas',
      description: 'Abordagem criativa e estruturada para superar desafios técnicos'
    }
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-container">
        <h2 data-aos="fade-down">Sobre Mim</h2>

        {/* Hero Section com Foto e Introdução */}
        <div className="sobre-hero" data-aos="fade-up">
          <div className="foto-card">
            <div className="foto-wrapper">
              <img src={fotoEscritorio} alt="Foto do ambiente de trabalho" className="foto-escritorio" />
              <div className="foto-overlay">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>

          <div className="intro-content">
            <h3>Desenvolvedor Full Stack em Formação</h3>
            <p className="intro-text">
              Sou estudante de <span>Análise e Desenvolvimento de Sistemas</span> e estou em busca da minha
              primeira oportunidade como <span>desenvolvedor júnior</span>, além de desenvolver projetos freelance para negócios locais.
            </p>
            <p className="intro-text">
              Trabalho com <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>,
              <span>TypeScript</span>, <span>React</span>, <span>Node.js</span> e <span>Git/GitHub</span>,
              criando interfaces responsivas, organizadas e pensadas para uso real.
            </p>
            <p className="intro-text">
              Meu foco é unir <span>boa comunicação</span>, <span>aprendizado rápido</span> e
              <span> entrega consistente</span>. Para empresas, quero somar em times de desenvolvimento; para clientes,
              quero transformar ideias em páginas e sistemas simples que ajudem a vender, organizar e gerar contato.
            </p>

            <a
              className="btn-download-cv"
              href="/curriculos/Anderson_Ferreira_CV.pdf"
              download="Anderson_Ferreira_CV.pdf"
              aria-label="Baixar currículo de Anderson Ferreira em PDF"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid" data-aos="fade-up" data-aos-delay="100">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline de Educação */}
        <div className="timeline-section" data-aos="fade-up" data-aos-delay="200">
          <h3 className="section-subtitle">
            <i className="fas fa-graduation-cap"></i>
            Formação & Experiência
          </h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
                onClick={() => setActiveTimeline(index)}
                data-aos="fade-right"
                data-aos-delay={100 * index}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p className="timeline-institution">
                    <i className="fas fa-building"></i>
                    {item.institution}
                  </p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-section" data-aos="fade-up" data-aos-delay="300">
          <h3 className="section-subtitle">
            <i className="fas fa-star"></i>
            Competências Pessoais
          </h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-card" data-aos="zoom-in" data-aos-delay={50 * index}>
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
