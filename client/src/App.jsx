import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Index/Home/Home';
import SignIn from './components/User/SignIn';
import Register from './components/User/Register';
import Dashboard from './components/User/Dashboard';
import RegistrationSuccess from './components/User/RegistrationSuccess';
import MainRecomendation from './components/Recomendacion/MainRecomendation';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Encabezado de la aplicación */}
      <Header />
      <Routes>
        {/* Rutas de la aplicación */}
        <Route path="/" element={<Welcome />} />
        <Route path="/account" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<MainRecomendation />} />
        {/* Ruta para manejar cualquier otro caso (página no encontrada) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Pie de página de la aplicación */}
      <Footer />
    </>
  );
}

export default App;
