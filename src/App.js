import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Sobre from './components/Sobre';
import Stack from './components/stack';
import Projetos from './components/Projetos';
import Footer from  './components/Footer';
import Contato from './components/Contato';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Sobre />
      <Stack />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
