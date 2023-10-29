import React from 'react';
import { Spinner, Alert, Button, Row, Col } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import { useAuth } from '../../Hooks/useAuth';
import RecommendationListItemForm from '../../forms/RecommendationListItemForm/RecommendationListItemForm';

function RecommendationListItemPage() {
    const { authUser } = useAuth(); // Utiliza el hook 'useAuth' para obtener el usuario autenticado y el estado de carga
    const {
        recommendations,
        loading,
        error,
        handleOrderByLikes,
        sortRecommendations,
        handleOrderByDate,
        sortingBy,
        setSortingBy,
        setAscOrder,
        ascOrder,
        upvoteRecommendation,
        deleteRecommendationsById,
        recommendationId,
    } = useRecommendation();
    const userData = authUser || {};

    return (
        <div className="container">
            <h2 className="text-center mt-3">Recomendaciones</h2>
            <Row className="d-flex align-items-center justify-content-center">
                <Col xs={12} sm={6} md={6} lg={6} className="my-5">
                    <div className="order-bar">
                        <label htmlFor="orderBySelect" className="me-2">Ordenar por:</label>
                        <select
                            id="orderBySelect"
                            className="form-select col-6"
                            value={sortingBy}
                            onChange={(e) => {
                                setSortingBy(e.target.value);
                            }}
                        >
                            <option value="likes">Likes</option>
                            <option value="created_at">Fecha</option>
                        </select>
                        <Button
                            variant="info"
                            size="sm"
                            className="btn-rectangular"
                            onClick={() => {
                                if (sortingBy === 'likes') {
                                    handleOrderByLikes();
                                } else if (sortingBy === 'created_at') {
                                    handleOrderByDate();
                                }
                                setAscOrder(!ascOrder);
                            }}
                        >
                            {ascOrder ? 'primero' : 'ultimo'}
                        </Button>
                    </div>
                </Col>
            </Row>

            {loading ? (
                <Spinner animation="border" role="status" className="d-block m-auto my-3">
                    <span className="sr-only">Hack a Trip!...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger" className="text-center my-3">
                    {error.message}
                </Alert>
            ) : recommendations.length > 0 ? (
                <div className="recommendation-list">
                    {sortRecommendations(recommendations).map((recommendation) => (
                        <RecommendationListItemForm
                            userData={userData}
                            loading={loading}
                            key={recommendation.id} // Add a unique key prop
                            recommendation={recommendation}
                            username={recommendation.username}
                            created_at={recommendation.created_at}
                            upvoteRecommendation={() => upvoteRecommendation(recommendation.id)}
                            deleteRecommendationsById={deleteRecommendationsById}
                            recommendationId={recommendation.id}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center my-3">No se encontraron recomendaciones.</p>
            )}
        </div>
    );
}

export default RecommendationListItemPage;