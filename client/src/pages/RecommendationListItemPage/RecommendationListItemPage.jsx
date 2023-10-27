import React from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationListItemForm from '../../forms/RecommendationListItemForm/RecommendationListItemForm';

function RecommendationListItemPage() {
    const { recommendations, loading, error } = useRecommendation();

    return (
        <div className="container-recommendation">
            <h2>Recomendaciones</h2>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger">{error.message}</Alert>
            ) : recommendations ? (
                <div className="recommendation-list">
                    {recommendations.map((recommendation) => (
                        <RecommendationListItemForm
                            key={recommendation.id}
                            recommendation={recommendation}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default RecommendationListItemPage;
