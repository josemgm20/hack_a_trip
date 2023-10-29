import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RecommendationFooterCard({ username, created_at, upvoteRecommendation, deleteRecommendationsById, id }) {
    const handleUpvote = () => {
        upvoteRecommendation(id);
    };

    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <p className="recommendation-created">Created At: {created_at}</p>
            <Button
                variant="success"
                onClick={handleUpvote} // Pass the function directly
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
        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {
    username: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
};

export default RecommendationFooterCard;
