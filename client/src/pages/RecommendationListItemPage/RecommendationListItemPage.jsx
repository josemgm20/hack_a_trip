import React, { useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationListItemForm from '../../forms/RecommendationListItemForm/RecommendationListItemForm';

function RecommendationListItemPage() {
<<<<<<< HEAD
    const {
        recommendations,
        loading,
        error,
        handleOrderByChange,
        sortRecommendations,
        orderBy,
        ascOrder,
    } = useRecommendation();

    return (
        <div className="container-recommendation">
            <h2>Recomendaciones</h2>
            <div className="order-bar">
                <label htmlFor="orderBySelect">Ordenar por:</label>
                <select
                    id="orderBySelect"
                    className="form-select"
=======
    // Importaciones y declaraciones de estado

    const {
        recommendations, // Lista de recomendaciones
        loading, // Estado de carga
        error, // Posible error
        handleOrderByChange, // Función para cambiar el orden
        sortRecommendations, // Función para ordenar las recomendaciones
        orderBy, // Campo por el cual se ordena
        ascOrder, // Orden ascendente o descendente
    } = useRecommendation(); // Utiliza el hook 'useRecommendation'

    return (
        <div className="container-recommendation">
            <h2 className="text-center">Recomendaciones</h2>
            <div className="order-bar d-flex justify-content-center">
                <label htmlFor="orderBySelect" className="me-2">Ordenar por:</label>
                <select
                    id="orderBySelect"
                    className="form-select form-select-sm" // Clase 'form-select-sm' añadida
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
                    value={orderBy}
                    onChange={handleOrderByChange}
                >
                    <option value="likes">Likes</option>
                    <option value="created_at">Fecha</option>
                </select>
<<<<<<< HEAD
                <button onClick={handleOrderByChange}>
=======
                <button onClick={handleOrderByChange} className="btn btn-sm ml-1 "> {/* Clase 'btn btn-sm' añadida */}
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
                    {ascOrder ? 'desde el primero' : 'desde el ultimo'}
                </button>
            </div>
            {loading ? (
<<<<<<< HEAD
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            ) : error ? (
                console.log(error.message)
            ) : recommendations.length >
              0 /* Change to recommendations.length > 0 */ ? (
                <div className="recommendation-list">
                    {sortRecommendations(recommendations).map(
                        (recommendation /* Use sortRecommendations */) => (
                            <RecommendationListItemForm
                                key={recommendation.id}
                                recommendation={recommendation}
                            />
                        )
                    )}
                </div>
            ) : (
                <p>No recommendations found.</p>
=======
                <Spinner animation="border" role="status" className="d-block m-auto">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger" className="text-center">
                    {error.message}
                </Alert>
            ) : recommendations.length > 0 ? (
                <div className="recommendation-list">
                    {sortRecommendations(recommendations).map((recommendation) => (
                        <RecommendationListItemForm
                            key={recommendation.id}
                            recommendation={recommendation}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center">No se encontraron recomendaciones.</p>
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
            )}
        </div>
    );
}

export default RecommendationListItemPage;
