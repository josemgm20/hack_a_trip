// useRecommendation.js

// Import necessary hooks and services.
import { useEffect, useState } from 'react'; // Importa los hooks necesarios.
import { useSearchParams } from 'react-router-dom'; // Importa useSearchParams para obtener parámetros de búsqueda de la URL.
import { fetchRecommendationService } from '../services/recommendatonService'; // Importa el servicio para obtener recomendaciones.

export const useRecommendation = () => {
    const [recommendations, setRecommendations] = useState([]); // Estado para almacenar las recomendaciones.
    const [searchParams, setSearchParams] = useSearchParams(); // Estado para manejar los parámetros de búsqueda.
    const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando.
    const [error, setError] = useState(null); // Estado para manejar errores.

    useEffect(() => {
        const fetchRecommendationsData = async () => {
            try {
                setLoading(true);

                const body = await fetchRecommendationService(searchParams);

                setRecommendations(body.data.recomendaciones); // Actualiza las recomendaciones obtenidas.
            } catch (err) {
                setError(err); // Maneja errores.
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendationsData();
    }, [searchParams]);

    const upvoteRecommendation = (recommendationId) => {
        const newRecommendations = recommendations.map(
            (currentRecommendation) => {
                if (currentRecommendation.id === recommendationId) {
                    const likedByMe = !currentRecommendation.likedByMe;
                    const likes = likedByMe
                        ? currentRecommendation.likes + 1
                        : currentRecommendation.likes - 1;

                    return {
                        ...currentRecommendation,
                        likedByMe,
                        likes,
                    };
                }
                return currentRecommendation;
            }
        );

        setRecommendations(newRecommendations);
    };

    const deleteRecommendationsById = (recommendationId) => {
        const newRecommendations = recommendations.filter(
            (currentRecommendation) =>
                currentRecommendation.id !== recommendationId
        );

        setRecommendations(newRecommendations);
    };

    // Funcion de creacion de una recomendacion
    const addRecommendation = (newRecommendations) => {
        setRecommendations([newRecommendations, ...recommendations]);
    };

    return {
        recommendations, // Lista de recomendaciones.
        loading, // Estado de carga.
        setSearchParams, // Función para establecer parámetros de búsqueda.
        upvoteRecommendation, // Función para gestionar votos positivos.
        deleteRecommendationsById, // Función para eliminar recomendaciones.
        error, // Error, si lo hay.
        addRecommendation, // Funcion qu agrega una recomendacion
    };
};
