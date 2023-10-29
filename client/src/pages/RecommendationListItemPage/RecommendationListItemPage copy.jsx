import React from 'react';
import { Spinner, Alert, Button, Row, Col } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationListItemForm from '../../forms/RecommendationListItemForm/RecommendationListItemForm';

function RecommendationListItemPage() {
    // Importaciones y declaraciones de estado
    const {
        recommendations, // Lista de recomendaciones
        loading, // Estado de carga
        error, // Posible error
        handleOrderByLikes, // Función para cambiar el orden
        sortRecommendations, // Función para ordenar las recomendaciones
        orderBy, // Campo por el cual se ordena
        handleOrderByDate,
        sortingBy, // Add sortingBy from useRecommendation
        setSortingBy, // Add setSortingBy from useRecommendation
        ascOrder, // Orden ascendente o descendente
    } = useRecommendation(); // Utiliza el hook 'useRecommendation'

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
                            onClick={sortingBy === 'likes' ? handleOrderByLikes : handleOrderByDate}
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
                            key={recommendation.id}
                            recommendation={recommendation}
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
