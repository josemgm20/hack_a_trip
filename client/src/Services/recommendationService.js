// Importa la configuración del servidor desde 'config'
import config from '../Utls/config';

// Función para obtener recomendaciones
export const fetchRecommendations = () => {
    return fetch(`${config.serverUrl}:${config.serverPort}/recomendaciones-vista`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
            return response.json();
        })
        .then((data) => {
            return data.data.recomendacion; // Devuelve los datos de la recomendación
        });
};

// Función para manejar un voto positivo (upvote)
export const handleUpvote = (recommendation) => {
    return fetch(`${config.serverUrl}:${config.serverPort}/recomendaciones/${recommendation.id}/likes`, {
        method: 'POST',
        // Puedes incluir encabezados y un cuerpo de solicitud si es necesario según tu servidor
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
        });
};

// Función para manejar un voto negativo (downvote)
export const handleDownvote = (recommendation) => {
    return fetch(`${config.serverUrl}:${config.serverPort}/recomendaciones/${recommendation.id}/likes`, {
        method: 'POST',
        // Puedes incluir encabezados y un cuerpo de solicitud si es necesario según tu servidor
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
        });
};
