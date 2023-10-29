import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RecommendationFooterCard({ username, created_at, upvoteRecommendation, deleteRecommendationsById }) {
    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <Button
                variant="success"
                onClick={upvoteRecommendation}
                className="upvote-button"
            >
                Me gusta
            </Button>
            <Button
                variant="danger"
                onClick={deleteRecommendationsById}
                className="delete-button"
            >
                Eliminar
            </Button>
            <p className="recommendation-created">Created At: {created_at}</p>
        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {
    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
};

export default RecommendationFooterCard;
