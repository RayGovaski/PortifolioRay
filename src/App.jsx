// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './Components/layout/Navbar';

import './App.css'; // Garanta que este arquivo tem os estilos abaixo

function App() {
  return (
    <>
      <Router>
        <div className="app-container"> {/* 1. Este container é essencial */}
          <Navbar />
          <main className="main-content"> {/* 2. O conteúdo principal precisa crescer */}
            <AppRoutes />
          </main>
          
        </div>
      </Router>
    </>
  );
}

export default App;