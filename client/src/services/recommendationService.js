// recommendationService.js

// Import the server configuration from 'config'
// Importa la configuración del servidor desde 'config'
const baseURL = 'http://localhost:8081';

import { getToken } from '../utils/getToken'; // Fixed the import path
// Importa la función para obtener el token desde 'getToken' (Ruta fija)

// Register a recommendation
// Registra una recomendación
export const createRecommendationService = async (formData) => {
    console.log(formData)
    const token = getToken();

    const res = await fetch(`${baseURL}/recomendaciones`, { // Fixed the URL path
        method: 'POST', // Usa 'POST' en lugar de 'post'
        headers: {
            Authorization: token,
        },
        body: formData,
    });

    const body = await res.json();

    return body;
};

// Function to fetch recommendations
// Función para obtener recomendaciones
export const fetchRecommendationService = async (searchParams) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/recomendaciones?${searchParams}`, {
        headers: token ? { Authorization: token } : {},
    });

    const body = await res.json();

    return body;
};
// Function to handle an upvote
// Función para manejar un voto positivo (upvote)
export const handleUpvoteService = async (recommendationId, method) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/recomendaciones/${recommendationId}/likes`, { // Fixed the URL path
        method, // Usa el método proporcionado
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};

// Function to handle a downvote
// Función para manejar un voto negativo (downvote)
export const handleDownvoteService = async (recommendationId) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/recomendaciones/${recommendationId}`, { // Fixed the URL path and 'delete' method
        method: 'DELETE', // Usa 'DELETE' para eliminar una recomendación
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};

// Delete a recommendation.
// Elimina una recomendación.
export const deleteRecommendationService = async (recommendationId) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/recomendaciones/${recommendationId}`, { // Fixed the URL path and 'DELETE' method
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};
