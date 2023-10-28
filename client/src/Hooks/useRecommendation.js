import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
    fetchRecommendationService,
    createRecommendationService
} from '../services/recommendatonService'; // Corrected the import path
import { useError } from './useError';

export const useRecommendation = () => {
    // Importa funciones y servicios necesarios, y corrige la ruta de importación
    const { setErrMsg } = useError();
    // Estados para almacenar datos de recomendaciones y controlar el estado de carga
    const [recommendations, setRecommendations] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at');  // Establece el campo por el cual se ordenan las recomendaciones
    const [ascOrder, setAscOrder] = useState(false); // Establece si el orden es ascendente o descendente
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate(); // Obtiene la función de navegación de React Router

    // Función para manejar la búsqueda o la pulsación de tecla
    const handleSearchOrKeyPress = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        }
    };

    // Función para cambiar el orden de las recomendaciones

    const handleOrderByChange = () => {
        setAscOrder(!ascOrder);
    };

    const sortRecommendations = (recommendationsToSort) => {
        return recommendationsToSort.slice().sort((a, b) => {
            if (orderBy === 'likes') {
                return ascOrder ? a.likes - b.likes : b.likes - a.likes;
            } else if (orderBy === 'created_at') {
                return ascOrder
                    ? new Date(a.created_at) - new Date(b.created_at)
                    : new Date(b.created_at) - new Date(a.created_at);
            }
            return 0;
        });
    };

    // Efecto para cargar los datos de las recomendaciones
    useEffect(() => {
        const fetchRecommendationsData = async () => {
            try {
                setLoading(true);
                const body = await fetchRecommendationService(searchParams); // Realiza una solicitud API para obtener las recomendaciones
                console.log('API Response:', body);

                if (body.data && Array.isArray(body.data.recomendaciones)) {
                    setRecommendations(body.data.recomendaciones); // Almacena las recomendaciones en el estado
                } else {
                    setError(new Error('Formato de datos no válido'));
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendationsData();
    }, [searchParams, setErrMsg]);


    // Función para dar like a una recomendación
    const upvoteRecommendation = async (recommendationId) => {
        try {
            // Realiza una solicitud API para dar like a una recomendación
            // Actualiza el estado 'recommendations' después de una respuesta API exitosa
            const response = await fetchRecommendationService.upvote(recommendationId);
            if (response.success) {
                // Actualiza la lista de recomendaciones con el nuevo estado de like
                const updatedRecommendations = recommendations.map((currentRecommendation) => {
                    if (currentRecommendation.id === recommendationId) {
                        const likedByMe = !currentRecommendation.likedByMe;
                        const likes = likedByMe ? currentRecommendation.likes + 1 : currentRecommendation.likes - 1;
                        return { ...currentRecommendation, likedByMe, likes };
                    }
                    return currentRecommendation;
                });
                setRecommendations(updatedRecommendations);
            } else {
                setError(new Error(response.message));
            }
        } catch (error) {
            setError(error);
        }
    };

    // Función para eliminar una recomendación por ID
    const deleteRecommendationsById = (recommendationId) => {
        // Filtra las recomendaciones para excluir la que se eliminará
        const newRecommendations = recommendations.filter(
            (currentRecommendation) => currentRecommendation.id !== recommendationId
        );
        setRecommendations(newRecommendations);
    };

    // Función para crear una nueva recomendación
    const handleRecommendationCreate = async (titulo, tipo, descripcion, file) => {
        try {
            setLoading(true);
            const formData = new FormData();

            if (titulo.trim() === '' || tipo.trim() === '') {
                throw new Error('Los campos Título y Tipo son obligatorios.');
            }

            formData.append('titulo', titulo);
            formData.append('tipo', tipo);

            if (descripcion.trim() !== '') {
                formData.append('descripcion', descripcion);
            }

            if (file) formData.append('foto', file);

            const body = await createRecommendationService(formData); // Realiza una solicitud API para crear una nueva recomendación

            if (body.status === 'error') {
                throw new Error(body.message);
            }

            navigate('/explore'); // Navega a la página de exploración después de crear la recomendación
        } catch (err) {
            setErrMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        recommendations, // Recomendaciones
        loading, // Estado de carga
        setSearchParams, // Establecer parámetros de búsqueda
        upvoteRecommendation, // Dar like a una recomendación
        deleteRecommendationsById, // Eliminar recomendaciones por ID
        error, // Posible error
        handleOrderByChange, // Cambiar el orden
        sortRecommendations, // Ordenar las recomendaciones
        orderBy, // Campo por el cual se ordena
        ascOrder, // Orden ascendente o descendente
        handleSearchOrKeyPress, // Manejar búsqueda o pulsación de tecla
        handleRecommendationCreate, // Incluir la nueva función aquí
    };
};