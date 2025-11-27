// src/App.js
import './App.css';
import AppRoutes from './routes';
import { useState } from 'react';

function App() {
  const [filtro, setFiltro] = useState('');
  const [busca, setBusca] = useState('');

  const handleSearch = (query) => setBusca(query.toLowerCase());
  const handleFilter = (categoria) => setFiltro(categoria === 'limpar' ? '' : categoria);

  return (
    <div className="page-wrapper">
      <AppRoutes
        filtro={filtro}
        busca={busca}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
    </div>
  );
}

export default App;