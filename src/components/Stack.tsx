import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Stack.css';

interface StackItem {
  icon: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  color: string;
  level: number; // 1-5
}

const stacks: StackItem[] = [
  { icon: "fab fa-html5", name: "HTML5", category: "frontend", color: "#E34F26", level: 5 },
  { icon: "fab fa-css3-alt", name: "CSS3", category: "frontend", color: "#1572B6", level: 5 },
  { icon: "fab fa-js-square", name: "JavaScript", category: "languages", color: "#F7DF1E", level: 5 },
  { icon: "fab fa-react", name: "React", category: "frontend", color: "#61DAFB", level: 5 },
  { icon: "fab fa-node-js", name: "Node.js", category: "backend", color: "#339933", level: 4 },
  { icon: "fab fa-python", name: "Python", category: "languages", color: "#3776AB", level: 4 },
  { icon: "fab fa-git", name: "Git", category: "tools", color: "#F05032", level: 5 },
  { icon: "fab fa-github", name: "GitHub", category: "tools", color: "#181717", level: 5 },
  { icon: "fab fa-docker", name: "Docker", category: "tools", color: "#2496ED", level: 3 },
  { icon: "fab fa-linux", name: "Linux", category: "tools", color: "#FCC624", level: 4 },
  { icon: "fab fa-sass", name: "Sass", category: "frontend", color: "#CC6699", level: 4 },
  { icon: "fas fa-database", name: "MongoDB", category: "backend", color: "#47A248", level: 4 },
];

const Stack: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredStack, setHoveredStack] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Todos", icon: "fas fa-th" },
    { id: "frontend", name: "Frontend", icon: "fas fa-paint-brush" },
    { id: "backend", name: "Backend", icon: "fas fa-server" },
    { id: "languages", name: "Linguagens", icon: "fas fa-code" },
    { id: "tools", name: "Ferramentas", icon: "fas fa-tools" },
  ];

  const filteredStacks = filter === "all"
    ? stacks
    : stacks.filter(stack => stack.category === filter);

  const renderLevelStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < level ? 'star-filled' : 'star-empty'}`}
      />
    ));
  };

  return (
    <section id="habilidades" className="stack-section" data-aos="fade-up">
      <div className="stack-container">
        {/* Header */}
        <div className="stack-header">
          <h2 className="stack-section-title">
            <span className="title-icon">⚡</span>
            Tecnologias & Habilidades
          </h2>
          <p className="stack-subtitle">
            Ferramentas e tecnologias que domino para criar soluções completas
          </p>
        </div>

        {/* Filtros */}
        <div className="stack-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              aria-label={`Filtrar por ${cat.name}`}
            >
              <i className={cat.icon}></i>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Tecnologias */}
        <div className="stack-grid">
          {filteredStacks.map((stack, idx) => (
            <div
              key={idx}
              className="stack-card"
              data-aos="zoom-in"
              data-aos-delay={idx * 50}
              onMouseEnter={() => setHoveredStack(stack.name)}
              onMouseLeave={() => setHoveredStack(null)}
              style={{
                '--stack-color': stack.color,
              } as React.CSSProperties}
            >
              <div className="stack-card-inner">
                <div className="stack-icon-wrapper">
                  <i
                    className={`${stack.icon} stack-icon`}
                    style={{ color: stack.color }}
                  ></i>
                  {hoveredStack === stack.name && (
                    <div className="stack-glow" style={{ background: stack.color }}></div>
                  )}
                </div>

                <h3 className="stack-name">{stack.name}</h3>

                <div className="stack-level">
                  {renderLevelStars(stack.level)}
                </div>

                <div className="stack-category">
                  {stack.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="stack-stats">
          <div className="stat-item">
            <div className="stat-number">{stacks.length}</div>
            <div className="stat-label">Tecnologias</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stacks.filter(s => s.category === 'frontend').length}</div>
            <div className="stat-label">Frontend</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stacks.filter(s => s.category === 'backend').length}</div>
            <div className="stat-label">Backend</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stacks.filter(s => s.level === 5).length}</div>
            <div className="stat-label">Avançadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
