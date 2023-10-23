// RecommendationListItem.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, Button, Spinner, Alert } from 'react-bootstrap';
import { useRecommendation } from '../../Hooks/useRecommendation';
import './RecommendationListItem.css'; // Importar el archivo CSS

function RecommendationListItem() {
    const {
        recommendations,
        loading,
        upvoteRecommendation,
        deleteRecommendationService,
        error,
    } = useRecommendation();

    return (
        <div className="container-recommendation">
            <h2>Recomendaciones</h2>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            ) : error ? (
                <Alert variant="danger">{error.message}</Alert>
            ) : recommendations && recommendations.length === 0 ? (
                <p>No hay recomendaciones disponibles.</p>
            ) : (
                <div>
                    {recommendations.length > 0 ? (
                        <div>
                            {recommendations.map((recommendation) => (
                                <div key={recommendation.id} className="mb-3">
                                    <Card className="card">
                                        <Card.Img variant="top" src={recommendation.foto} />
                                        <Card.Body>
                                            <Card.Title>{recommendation.titulo}</Card.Title>
                                            <Card.Text>{recommendation.descripcion}</Card.Text>
                                        </Card.Body>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Likes: {recommendation.likes}</li>
                                            <li className="list-group-item">ID: {recommendation.id}</li>
                                            <li className="list-group-item">Tipo: {recommendation.tipo}</li>
                                        </ul>
                                        <Card.Body>
                                            <Button
                                                variant="success"
                                                onClick={() => upvoteRecommendation(recommendation.id)}
                                            >
                                                Me gusta
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => deleteRecommendationService(recommendation.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <Link to={`/recommendation/${recommendation.id}`}>Ver detalles</Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No hay recomendaciones disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default RecommendationListItem;
