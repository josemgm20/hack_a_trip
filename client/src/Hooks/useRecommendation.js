import { useState, useEffect } from 'react';
import {
    fetchRecommendations,
    handleUpvote,
    handleDownvote,
} from '../Services/recommendationService';

export const useRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Al cargar el componente, se obtienen las recomendaciones
        fetchRecommendations()
            .then((data) => {
                setRecommendations(data);
            })
            .catch((error) => {
                console.error('Error al obtener recomendaciones:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Función para votar positivamente una recomendación
    const upvoteRecommendation = (recommendation) => {
        handleUpvote(recommendation)
            .then(() => {
                // Puedes actualizar la interfaz de usuario si es necesario
            })
            .catch((error) => {
                console.error('Error al votar positivamente una recomendación:', error);
            });
    };

    // Función para votar negativamente una recomendación
    const downvoteRecommendation = (recommendation) => {
        handleDownvote(recommendation)
            .then(() => {
                // Puedes actualizar la interfaz de usuario si es necesario
            })
            .catch((error) => {
                console.error('Error al votar negativamente una recomendación:', error);
            });
    };

    return {
        recommendations,
        loading,
        upvoteRecommendation,
        downvoteRecommendation,
    };
};
