<<<<<<< HEAD
// Importamos los componentes.
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PostSearch from './components/PostSearch/PostSearch';

const App = () => {
    return (
        <div className="app">
            <Header />
            <PostSearch />
            <Footer />
        </div>
    );
};
=======
import { useError } from './Hooks/useError';


import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './components/Home/Home';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';


// import para usuarios
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SignOnPage from './pages/SignOnPage/SignOnPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import RegistrationSuccess from './pages/RegisterPage/RegistrationSuccess';
import CreateRecommendationPage from './pages/CreateRecommendationPage/CreateRecommendationPage'
// import para recomendaciones
import RecommendationListItemPage from './pages/RecommendationListItemPage/RecommendationListItemPage';



import NotFound from './pages/NotFoundPage/NotFound';

const App = () => {
  const { errMsg, setErrMsg } = useError();

  return (
    <div className='app'>

      {/* Encabezado de la aplicación */}

      <Header />
      <ErrorMessage errMsg={errMsg} setErrMsg={setErrMsg} />
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
        <Route path="/explore" element={<RecommendationListItemPage />} />
        {/* Ruta para explorar contenido recomendado */}
        <Route path="/new-recommendation" element={<CreateRecommendationPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* Pie de página de la aplicación */}
    </div>
  );
}
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f

export default App;
