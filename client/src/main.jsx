import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Crear un "root" en el DOM para renderizar la aplicación
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Proporciona enrutamiento basado en el navegador */}
      <App /> {/* Renderiza el componente principal de la aplicación */}
    </BrowserRouter>
  </React.StrictMode>
);
