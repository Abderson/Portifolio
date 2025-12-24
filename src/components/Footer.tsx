import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Abderson",
      icon: "fab fa-github",
      color: "#333",
      hoverColor: "#6e5494"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anderson-ferreira-dev/",
      icon: "fab fa-linkedin",
      color: "#0077b5",
      hoverColor: "#005885"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anderson_e_fernanda/",
      icon: "fab fa-instagram",
      color: "#E4405F",
      hoverColor: "#C13584"
    }
  ];

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        {/* Seção Principal */}
        <div className="footer-main">
          {/* Logo e Descrição */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-text">Anderson</span>
              <span className="logo-accent">Ferreira</span>
            </h3>
            <p className="footer-tagline">
              Transformando ideias em código de qualidade
            </p>
            <div className="footer-code-badge">
              <i className="fas fa-code"></i>
              <span>{`<Code is poetry />`}</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer-links">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    <i className="fas fa-angle-right"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="footer-social-section">
            <h4 className="footer-title">Conecte-se</h4>
            <p className="footer-social-text">
              Acompanhe meu trabalho nas redes sociais
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Seção Inferior */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} <span className="highlight">Anderson Ferreira</span>.
              Todos os direitos reservados.
            </p>
            <p className="footer-made-with">
              Feito com <i className="fas fa-heart heart-icon"></i> e muito ☕
            </p>
          </div>

          {/* Botão Voltar ao Topo */}
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>

      {/* Wave Effect */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
