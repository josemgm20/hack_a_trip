import { useState, useEffect } from 'react';
import { Card, Button, Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecommendationFooterCard({ username, created_at, upvoteRecommendation, deleteRecommendationsById, id, authUser }) {
    const [hasUpvoted, setHasUpvoted] = useState(false);


    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <p className="recommendation-created">Created At: {created_at}</p>
            <Button
                variant="success"
                onClick={() => upvoteRecommendation(id)}
                className="upvote-button"
                disabled={hasUpvoted}
            >
                Me gusta
            </Button>


        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {
    authUser: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
};

export default RecommendationFooterCard;
