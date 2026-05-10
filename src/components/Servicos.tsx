import React from "react";
import "./Servicos.css";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: "fas fa-store",
    title: "Sites para comércios locais",
    description: "Páginas profissionais para lojas, prestadores de serviço, cardápios, catálogos e presença digital no Google."
  },
  {
    icon: "fas fa-bullseye",
    title: "Landing pages",
    description: "Páginas objetivas para campanhas, captura de contatos, divulgação de produtos e apresentação de serviços."
  },
  {
    icon: "fas fa-laptop-code",
    title: "Aplicações web",
    description: "Sistemas simples sob medida, dashboards, agendas, formulários e interfaces para organizar processos do negócio."
  },
  {
    icon: "fas fa-briefcase",
    title: "Primeira oportunidade dev",
    description: "Busco atuar com desenvolvimento front-end ou full stack júnior, aprendendo rápido e contribuindo com entregas reais."
  }
];

const Servicos: React.FC = () => {
  return (
    <section id="servicos" className="servicos-section" data-aos="fade-up">
      <div className="servicos-container">
        <div className="servicos-header">
          <span className="servicos-kicker">Como posso ajudar</span>
          <h2>Desenvolvimento com foco em resultado</h2>
          <p>
            Crio interfaces modernas, responsivas e fáceis de usar para empresas, profissionais autônomos e equipes que precisam de alguém comprometido com evolução constante.
          </p>
        </div>

        <div className="servicos-grid">
          {services.map((service, index) => (
            <article className="servico-card" key={service.title} data-aos="zoom-in" data-aos-delay={index * 80}>
              <div className="servico-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="servicos-cta">
          <div>
            <strong>Para recrutadores:</strong> veja projetos publicados, código no GitHub e minha evolução técnica.
          </div>
          <div>
            <strong>Para clientes:</strong> posso tirar sua ideia do papel com um site claro, rápido e acessível.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
