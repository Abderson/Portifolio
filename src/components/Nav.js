import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  // Função para fechar o menu quando clicar em um link
  const closeMenu = () => {
    setOpen(false);
  };

  return (
  <nav className="navbar" data-aos="fade-right">
      <div className="logo">Anderson Ferreira</div>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
        </li>
        <li>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
        </li>
        <li>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
