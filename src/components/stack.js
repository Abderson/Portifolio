import React from "react"; // Importa o React
import Slider from "react-slick"; // Importa o componente de carrossel
import "slick-carousel/slick/slick.css"; // Importa o CSS do carrossel
import "slick-carousel/slick/slick-theme.css"; // Importa o tema do carrossel
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa os ícones Font Awesome
import './Stack.css'; // Importa o CSS específico do componente

// Array de stacks com ícones e nomes
const stacks = [
  { icon: "fab fa-html5", name: "HTML" }, // Ícone HTML
  { icon: "fab fa-css3-alt", name: "CSS" }, // Ícone CSS
  { icon: "fab fa-js-square", name: "JavaScript" }, // Ícone JavaScript
  { icon: "fab fa-python", name: "Python" }, // Ícone Python
  { icon: "fab fa-node-js", name: "Node.js" }, // Ícone Node.js
  { icon: "fab fa-react", name: "React" }, // Ícone React
  { icon: "fab fa-git", name: "Git" }, // Ícone Git
  { icon: "fab fa-github", name: "GitHub" }, // Ícone GitHub
  { icon: "fab fa-docker", name: "Docker" }, // Ícone Docker
  { icon: "fab fa-linux", name: "Linux" }, // Ícone Linux
  { icon: "fab fa-windows", name: "Windows" }, // Ícone Windows
];

function Stack() {
  // Configurações do carrossel
  const settings = {
    dots: false, // Mostra os pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 4, // Quantidade de stacks visíveis
    slidesToScroll: 1, // Quantidade de stacks que passam por vez
    autoplay: true, // Ativa o movimento automático
    autoplaySpeed: 2000, // Tempo entre cada slide (2 segundos)
    responsive: [ // Configurações para responsividade
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5, // Mostra 2 stacks em telas médias
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Mostra 1 stack em telas pequenas
        },
      },
    ],
  };

  return (
    <section id="habilidades" data-aos="fade-up"> {/* Seção de stacks */}
      <h2 className="stack-section-title">Stack Tecnológico</h2>
      <Slider {...settings}> {/* Carrossel de stacks */}
        {stacks.map((stack, idx) => (
          <div key={idx} style={{ textAlign: "center", padding: "1rem" }}> {/* Card de cada stack */}
            <i className={stack.icon + " skill-icon"} style={{ fontSize: "3rem", color: "#61dafb" }}></i> {/* Ícone da stack */}
            <h3 style={{ color: "#61dafb", marginBottom: "1rem", fontSize: "1.5rem", textAlign: "center" }}>{stack.name}</h3> {/* Nome da stack */}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Stack; // Exporta o componente para uso