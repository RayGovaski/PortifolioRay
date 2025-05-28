import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Carreira from '../pages/Carreira/Carreira';
import Projetos from '../pages/Projetos/Projetos';
import ProjetoDetalhes from '../pages/ProjetoDetalhes/ProjetoDetalhes';

const AppRoutes = () => {
  return (
    <div style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;