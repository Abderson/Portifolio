import React from 'react';

const SEOHead = ({ 
  title = "Anderson Ferreira - Desenvolvedor Full Stack",
  description = "Desenvolvedor Full Stack especializado em React, Node.js, JavaScript e tecnologias modernas. Portfólio com projetos, certificações e experiência profissional.",
  keywords = "desenvolvedor, full stack, react, node.js, javascript, frontend, backend, portfolio, projetos, certificações",
  image = "/img/foto-perfil-fundo-branco.png",
  url = window.location.href,
  type = "website",
  author = "Anderson Ferreira"
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
  
  React.useEffect(() => {
    // Atualiza meta tags dinamicamente
    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateMetaName = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Meta tags básicas
    document.title = title;
    updateMetaName('description', description);
    updateMetaName('keywords', keywords);
    updateMetaName('author', author);
    updateMetaName('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', fullImageUrl);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'Anderson Ferreira - Portfolio');

    // Twitter Card
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', fullImageUrl);

    // Meta tags adicionais
    updateMetaName('robots', 'index, follow');
    updateMetaName('language', 'pt-BR');
    updateMetaName('theme-color', '#61dafb');

  }, [title, description, keywords, fullImageUrl, url, type, author]);

  return null;
};

export default SEOHead;
