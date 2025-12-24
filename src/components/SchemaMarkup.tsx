import React, { useEffect } from 'react';
import { SchemaMarkupProps, Project } from '../types';

interface SchemaMarkupExtendedProps extends SchemaMarkupProps {
  data?: Project;
}

const SchemaMarkup: React.FC<SchemaMarkupExtendedProps> = ({ type = 'Person', data }) => {
  const getPersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anderson Ferreira",
    "jobTitle": "Desenvolvedor Full Stack",
    "description": "Desenvolvedor Full Stack especializado em React, Node.js, JavaScript e tecnologias modernas",
    "url": window.location.origin,
    "image": `${window.location.origin}/img/foto-perfil-fundo-branco.png`,
    "sameAs": [
      "https://github.com/Abderson",
      "https://linkedin.com/in/anderson-ferreira",
      "https://instagram.com/anderson_ferreira"
    ],
    "knowsAbout": [
      "React",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Git",
      "GitHub",
      "Docker",
      "Linux"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desenvolvedor Full Stack",
      "occupationLocation": {
        "@type": "Country",
        "name": "Brasil"
      }
    }
  });

  const getPortfolioSchema = () => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Portfólio Anderson Ferreira",
    "description": "Portfólio profissional com projetos de desenvolvimento web",
    "author": {
      "@type": "Person",
      "name": "Anderson Ferreira"
    },
    "url": window.location.href,
    "dateCreated": "2024",
    "genre": "Portfolio",
    "inLanguage": "pt-BR"
  });

  const getProjectSchema = (project: Project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.titulo,
    "description": project.descricao,
    "author": {
      "@type": "Person",
      "name": "Anderson Ferreira"
    },
    "url": project.demo !== "#" ? project.demo : window.location.href,
    "image": `${window.location.origin}${project.imagem}`,
    "genre": "Software Application",
    "programmingLanguage": project.tecnologias,
    "codeRepository": project.github !== "#" ? project.github : undefined
  });

  const getSchema = () => {
    switch (type) {
      case 'Person':
        return getPersonSchema();
      case 'Portfolio':
        return getPortfolioSchema();
      default:
        return getPersonSchema();
    }
  };

  useEffect(() => {
    const schema = getSchema();

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [type, data]);

  return null;
};

export default SchemaMarkup;
