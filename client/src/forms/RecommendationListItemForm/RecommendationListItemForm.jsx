import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utls/customPropTypes';
import { useRecommendation } from '../../Hooks/useRecommendation';
import RecommendationHeaderCard from './RecommendationHeaderCard/RecommendationHeaderCard';
import RecommendationBodyCard from './RecommendationBodyCard/RecommendationBodyCard';
import RecommendationFooterCard from './RecommendationFooterCard/RecommendationFooterCard';
import { useAuth } from '../../Hooks/useAuth';

import "./RecommendationListItemForm.css";

function RecommendationListItemForm({ recommendation }) {
    const { upvoteRecommendation, loading, setLoading } = useRecommendation();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { authUser } = useAuth();
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
                            authUser={authUser}
                            id={recommendation.id}
                            recommendation={recommendation}
                            username={recommendation.username} // Pass the username prop
                            created_at={recommendation.created_at}
                            upvoteRecommendation={upvoteRecommendation}
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
        username: PropTypes.string.isRequired, // Add the missing username
    }),
    authUser: PropTypes.bool.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
};


export default RecommendationListItemForm;
