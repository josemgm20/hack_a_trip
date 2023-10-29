import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utls/customPropTypes';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationHeaderCard from './RecommendationHeaderCard/RecommendationHeaderCard';
import RecommendationBodyCard from './RecommendationBodyCard/RecommendationBodyCard';
import RecommendationFooterCard from './RecommendationFooterCard/RecommendationFooterCard';

import "./RecommendationListItemForm.css";

function RecommendationListItemForm({ recommendation }) {
    const { deleteRecommendationsById, upvoteRecommendation, loading, setLoading } = useRecommendation();
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <Card className={`recommendation-card card-custom mx-auto ${isFullScreen ? 'full-screen' : ''}`} style={{ maxWidth: "40vw" }}>
            {recommendation.loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Hack a Trip...</span>
                </Spinner>
            ) : (
                <>
                    <div onClick={toggleFullScreen}>
                        <RecommendationHeaderCard id={recommendation.id} foto={recommendation.foto} />
                    </div>
                    <div onClick={toggleFullScreen}>
                        <RecommendationBodyCard
                            titulo={recommendation.titulo}
                            tipo={recommendation.tipo}
                            descripcion={recommendation.descripcion}
                            likes={recommendation.likes}
                        />
                    </div>
                    <div onClick={toggleFullScreen}>
                        <RecommendationFooterCard
                            recommendation={recommendation} // Make sure to pass the recommendation object
                            username={recommendation.username} // Add other necessary props
                            created_at={recommendation.created_at} // Add other necessary props
                            upvoteRecommendation={upvoteRecommendation} // Add other necessary props
                            deleteRecommendationsById={deleteRecommendationsById} // Add other necessary props
                        />
                    </div>
                </>
            )}
        </Card>
    );
}

RecommendationFooterCard.propTypes = {
    recommendation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        // Add any other properties here with their PropTypes definitions
    }),
    username: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
};


export default RecommendationListItemForm;
