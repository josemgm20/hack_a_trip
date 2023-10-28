// RegisterRecomendacionPage.jsx

// Import the necessary hooks and components.
import { useAuth } from '../../Hooks/useAuth'; // Importa los hooks necesarios.
import { Navigate } from 'react-router-dom'; // Importa Navigate para redirecciones.
import { RecomendacionCreateForm } from '../../forms/RecomendacionCreateForm/RecomendacionCreateForm' // Importa el formulario de registro.
import {useRecommendation} from '../../Hooks/useRecommendation'


const RecomendacionCreatePage = () => {
    const { authUser } = useAuth(); // Obtiene el estado de autenticación y funciones relacionadas.
   
    const {addRecommendation} = useRecommendation;

    // Si la persona ya está autenticada, redirigir a la página de éxito de registro.
    if (!authUser) return <Navigate to="/" />;

    return (
        <main>
            <RecomendacionCreateForm addRecommendation={addRecommendation}/>
        </main>
    );
};

export default RecomendacionCreatePage;