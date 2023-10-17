// App.jsx
import React, { useState } from 'react'; // Importar React y useState desde React
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importar componentes de enrutamiento desde react-router-dom
import Welcome from './components/Index/Home/Home'; // Importar el componente Welcome
import SignIn from './components/User/SignIn'; // Importar el componente SignIn
import Register from './components/User/Register'; // Importar el componente Register
import Dashboard from './components/User/Dashboard'; // Importar el componente Dashboard
import NotFound from './components/Utls/NotFound'; // Importar el componente NotFound

function App() {
  return (
    <>
      <Routes> {/* Definir las rutas para la aplicación */}
        <Route path="/" element={<Welcome />} /> {/* Ruta para la página de bienvenida (Welcome) */}
        <Route path="/account" element={<SignIn />} /> {/* Ruta para la página de inicio de sesión (SignIn) */}
        <Route path="/register" element={<Register />} /> {/* Ruta para la página de registro (Register) */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para la página del panel de control (Dashboard) */}
        <Route path="*" element={<NotFound />} /> {/* Ruta para mostrar una página "No encontrada" (NotFound) en caso de rutas no coincidentes */}
      </Routes>
    </>
  );
}

export default App; // Exportar el componente App como exportación predeterminada
