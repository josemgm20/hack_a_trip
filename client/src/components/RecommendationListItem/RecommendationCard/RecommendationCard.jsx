import React from 'react';
import { useRecommendation } from '../../../Hooks/useRecommendation';

function RecommendationCard({ recommendation }) {
    return (
        <div className="recommendation-detail">
            <h2>{recommendation.titulo}</h2>
            <h3>{recommendation.tipo}</h3>
            <img src={recommendation.foto} alt={recommendation.titulo} />
            <p>{recommendation.descripcion}</p>
            <p>Likes: {recommendation.likes}</p>
        </div>
    );
}

export default RecommendationCard;
