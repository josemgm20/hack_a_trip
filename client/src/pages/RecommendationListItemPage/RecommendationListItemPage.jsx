import React, { useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationListItemForm from '../../forms/RecommendationListItemForm/RecommendationListItemForm';

function RecommendationListItemPage() {
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
                    value={orderBy}
                    onChange={handleOrderByChange}
                >
                    <option value="likes">Likes</option>
                    <option value="created_at">Fecha</option>
                </select>
                <button onClick={handleOrderByChange}>
                    {ascOrder ? 'desde el primero' : 'desde el ultimo'}
                </button>
            </div>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger">{error.message}</Alert>
            ) : recommendations.length > 0 ? ( /* Change to recommendations.length > 0 */
                <div className="recommendation-list">
                    {sortRecommendations(recommendations).map((recommendation) => ( /* Use sortRecommendations */
                        <RecommendationListItemForm
                            key={recommendation.id}
                            recommendation={recommendation}
                        />
                    ))}
                </div>
            ) : (
                <p>No recommendations found.</p>
            )}
        </div>
    );
}

export default RecommendationListItemPage;
