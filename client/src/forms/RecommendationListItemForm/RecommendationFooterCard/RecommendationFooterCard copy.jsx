import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RecommendationFooterCard({ username, created_at, upvoteRecommendation, deleteRecommendationsById, recommendationId }) {
    const handleUpvote = () => {
        upvoteRecommendation(recommendationId);
    };

    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <p className="recommendation-created">Created At: {created_at}</p>
            <Button
                variant="success"
                onClick={() => upvoteRecommendation(recommendationId)} // Ensure recommendationId is defined
                className="upvote-button"
            >
                Me gusta
            </Button>
            <Button
                variant="danger"
                onClick={() => deleteRecommendationsById(recommendationId)}
                className="delete-button"
            >
                Eliminar
            </Button>
        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {
    username: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
    recommendation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        loading: PropTypes.bool,
    }).isRequired,
};

export default RecommendationFooterCard;
