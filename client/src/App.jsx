import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './components/Home/Home';

// import para usuarios
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SignOnPage from './pages/SignOnPage/SignOnPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import RegistrationSuccess from './pages/RegisterPage/RegistrationSuccess';
// import para recomendaciones
import RecommendationListItem from './components/RecommendationListItem/RecommendationListItem';
import RecommendationCard from './components/RecommendationListItem/RecommendationCard/RecommendationCard'; // Import the new component

import NotFound from './pages/NotFoundPage/NotFound';

function App() {
  return (
    <div className='app'>
      {/* Encabezado de la aplicación */}
      <Header />
      <Routes>
        {/* Rutas de la aplicación */}
        <Route path="/" element={<Welcome />} />
        {/* Ruta para la página de inicio */}
        <Route path="/login" element={<SignOnPage />} />
        {/* Ruta para la página de inicio de sesión */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Ruta para la página de registro */}
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        {/* Ruta para la página de éxito de registro */}
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Ruta para la página del panel de control */}
        <Route path="/explore" element={<RecommendationListItem />} />
        {/* Ruta para explorar contenido recomendado */}
        <Route path="/recommendation/:id" element={<RecommendationCard />} />
        {/* Ruta para manejar cualquier otro caso (página no encontrada) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Pie de página de la aplicación */}
      <Footer />
    </div>
  );
}

export default App;
