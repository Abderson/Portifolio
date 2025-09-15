import React from "react";
import './Contato.css';

function Contato() {
  return (
  <section id="contato" className="App-contato" data-aos="fade-up">
      <h2>Contato</h2>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
