import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utls/customPropTypes';


function RecommendationListItemForm({
    recommendation,
    upvoteRecommendation,
    deleteRecommendationsById,
}) {
    const {
        id,
        foto,
        titulo,
        tipo,
        descripcion,
        username,
        likes,
        created_at,
    } = recommendation;

    return (
        <Card className="recommendation-card">
            <Card.Img variant="top" src={foto} className="recommendation-image" />
            <Card.Body>
                <Card.Title className="recommendation-title">{titulo}</Card.Title>
                <Card.Text className="recommendation-description">{descripcion}</Card.Text>
                <p className="recommendation-id">Recommendation ID: {id}</p>
                <p className="recommendation-type">Type: {tipo}</p>
                <p className="recommendation-username">Username: {username}</p>
                <p className="recommendation-likes">Likes: {likes}</p>
                <p className="recommendation-created">Created At: {created_at}</p>
            </Card.Body>
            <Card.Body className="recommendation-buttons">
                <Button
                    variant="success"
                    onClick={() => upvoteRecommendation(id)}
                    className="upvote-button"
                >
                    Me gusta
                </Button>
                <Button
                    variant="danger"
                    onClick={() => deleteRecommendationsById(id)}
                    className="delete-button"
                >
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    );
}

RecommendationListItemForm.propTypes = {
    authUser: userPropTypes,
    recommendation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        foto: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        likedByMe: PropTypes.bool.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
};

export default RecommendationListItemForm;
