import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importa estilos globais
import App from './App.jsx'; // Importa o componente principal da aplicação

// Cria a raiz da aplicação React no elemento com id 'root' no seu HTML
const root = createRoot(document.getElementById('root'));

// Renderiza o componente App dentro de StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);