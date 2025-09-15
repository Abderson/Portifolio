import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer" data-aos="fade-up">
      <div className="footer-icons">
        <a href="https://github.com/Abderson" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/anderson-ferreira-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/anderson_e_fernanda/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-code">
        <span>{`<Code is poetry />`}</span>
      </div>
      <p>© 2025 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
