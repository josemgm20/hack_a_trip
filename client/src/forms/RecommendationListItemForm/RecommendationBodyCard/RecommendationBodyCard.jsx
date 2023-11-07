import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'; // Import Row and Col
import PropTypes from 'prop-types';
import { userPropTypes } from '../../../utls/customPropTypes';
import { handleUpvoteService } from '../../../services/recommendationService';
import { useError } from '../../../hooks/useError';
import './RecommendationBodyCard.css';

const RecommendationBodyCard = ({
    authUser,
    id,
    titulo,
    tipo,
    descripcion,
    likes,
    likedByMe,
    upvoteRecommendation
}) => {
    const { setErrMsg } = useError();
    const [loading, setLoading] = useState(false);

    const handleLikeClick = async () => {
        try {
            setLoading(true);
            const method = likedByMe ? 'DELETE' : 'POST';
            const body = await handleUpvoteService(id, method);
            if (body.status === 'error') {
                throw new Error(body.message);
            }
            upvoteRecommendation(id);
        } catch (err) {
            setErrMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card.Body className="recommendation-card-body card-custom-body">
            <Card.Title className="recommendation-title">{titulo}</Card.Title>
            <Card.Text className="recommendation-descripcion">{descripcion}</Card.Text>
            <p className="recommendation-type">Type: {tipo}</p>
            <Row>

                <Col xs={3}>
                    <button
                        className={`megusta-button ${likedByMe && 'Me gusta'}`}
                        onClick={() => {
                            authUser && !loading && handleLikeClick();
                        }}
                    >
                        Me Gusta
                    </button>
                </Col>
                <Col xs={1} className="text-start">
                    <div className="">
                        <span className="likes-text">{likes}</span>
                    </div>
                </Col>
            </Row>
        </Card.Body>
    );
};

RecommendationBodyCard.propTypes = {
    authUser: userPropTypes,
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    likes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
};

export default RecommendationBodyCard;
