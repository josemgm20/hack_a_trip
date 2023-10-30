import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RecommendationBodyCard({ titulo, tipo, descripcion, likes }) {
    const description = descripcion || "No description available";
    return (
        <Card.Body className="recommendation-card-body card-custom-body">
            <Card.Title className="recommendation-title">{titulo}</Card.Title>
            <Card.Text className="recommendation-description">{description}</Card.Text>
            <p className="recommendation-type">Type: {tipo}</p>
            <p className="recommendation-likes">Likes: {likes}</p>
        </Card.Body>
    );
}

RecommendationBodyCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    likes: PropTypes.number.isRequired,
};
export default RecommendationBodyCard;
