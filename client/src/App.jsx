// Importamos los componentes.
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// Importamos las páginas.
import PostSearchPage from './pages/PostSearchPage/PostSearchPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<PostSearchPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
