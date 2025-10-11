import React from 'react';

const SchemaMarkup = ({ type = 'Person', data }) => {
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

  const getProjectSchema = (project) => ({
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
      case 'Project':
        return getProjectSchema(data);
      default:
        return getPersonSchema();
    }
  };

  React.useEffect(() => {
    const schema = getSchema();
    
    // Remove schema anterior se existir
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adiciona novo schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [type, data]);

  return null;
};

export default SchemaMarkup;
