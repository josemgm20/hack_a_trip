// SignOnPage.jsx


// Importa los hooks.
import { useAuth } from '../../Hooks/useAuth';

// Importa los componentes.
import SignOnForm from '../../forms/SignOnForm/SignOnForm';

import { Navigate, useNavigate } from 'react-router-dom';

const SignOnPage = () => {
    // Utilizamos el hook useAuth para obtener información de autenticación.
    const { authUser, authLogin, loading } = useAuth();
    const navigate = useNavigate();

    // Función para manejar el inicio de sesión.
    const handleSignIn = async (email, password) => {
        try {
            await authLogin(email, password);
            // Si el inicio de sesión es exitoso, navegar a la ruta /Dashboard.
            navigate('/Dashboard');
        } catch (error) {
            // Manejar errores de inicio de sesión aquí.
        }
    };

    // Si el usuario ya está autenticado, redirige a /Dashboard.
    if (authUser) {
        return <Navigate to="/Dashboard" />;
    }

    return (
        <main>
            { /* Renderiza el formulario de inicio de sesión. */}
            <SignOnForm authLogin={handleSignIn} loading={loading} />
        </main>
    );
};

export default SignOnPage;
