import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/wcag-colors.css';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 1000 });

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
