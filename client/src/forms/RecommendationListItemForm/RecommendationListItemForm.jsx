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
    const { deleteRecommendationsById, upvoteRecommendation } = useRecommendation();
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
                        <RecommendationHeaderCard
                            foto={recommendation.foto}
                            id={recommendation.id}
                        />
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
                            id={recommendation.id}
                            username={recommendation.username}
                            likes={recommendation.likes}
                            created_at={recommendation.created_at}
                            upvoteRecommendation={upvoteRecommendation}
                            deleteRecommendationsById={deleteRecommendationsById}
                        />
                    </div>
                </>
            )}
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
        created_at: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
};

export default RecommendationListItemForm;
