// src/routes.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Watch from './Pages/Watch';
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import './components/VideoModal.css';

function Layout({ children, filtro, busca, onSearch, onFilter }) {
  const location = useLocation();
  const isWatchPage = location.pathname === '/watch';

  // Estado do modal centralizado no Layout
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Header />
      <Banner onSearch={onSearch} onFilter={onFilter} />

      {/* Texto e Container somente na página /watch */}
      {isWatchPage && (
        <section style={{ padding: '40px 40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Assistir Filmes</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Pegue seu balde de pipoca, sente na sua poltrona e escolha um filme para assistir. Aproveite!
          </p>
          {/* Container único (sem duplicação) e com onSelect para abrir o modal */}
          <Container
            filtro={filtro}
            busca={busca}
            onSelect={(id) => setSelectedVideo(id)}
          />
        </section>
      )}

      <main className="page-content">{children}</main>

      {/* Modal global para a página /watch */}
      {isWatchPage && selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      <Footer />
    </>
  );
}

function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Layout {...props}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Watch agora não renderiza Container nem Modal; Layout cuida disso */}
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
