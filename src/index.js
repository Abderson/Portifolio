import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/wcag-colors.css';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS
AOS.init({ duration: 1000 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);


