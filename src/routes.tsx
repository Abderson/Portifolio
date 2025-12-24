import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Sobre from './components/Sobre';
import Stack from './components/Stack';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import Contato from './components/Contato';
import PageTransition from './components/PageTransition';
import LoadingSpinner from './components/LoadingSpinner';
import Certificados from './pages/Certificados';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Nav />
        <Suspense fallback={<LoadingSpinner size="large" text="Carregando página..." />}>
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <main id="main-content" role="main">
                  <Header />
                  <Sobre />
                  <Stack />
                  <Projetos />
                  <Contato />
                </main>
              </PageTransition>
            } />
            <Route path="/certificados" element={
              <PageTransition>
                <Certificados />
              </PageTransition>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
