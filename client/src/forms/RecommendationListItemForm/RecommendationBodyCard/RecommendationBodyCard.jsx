import { useState } from 'react';
import { Card, Row, Col, Toast, Button } from 'react-bootstrap'; // Import Row, Col, and Button
import { ToastContainer } from 'react-bootstrap'; // Import ToastContainer
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
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [successToastMessage, setSuccessToastMessage] = useState('');
    const [localLikes, setLocalLikes] = useState(likes); // Local state for likes

    const handleLikeClick = async () => {
        try {
            setLoading(true);
            const method = likedByMe ? 'DELETE' : 'POST';
            const body = await handleUpvoteService(id, method);
            if (body.status === 'error') {
                throw new Error(body.message);
            }

            // Update the local likes count based on user's action
            setLocalLikes(likedByMe ? localLikes - 1 : localLikes + 1);

            // Toggle the likedByMe state
            upvoteRecommendation(id);

            // Set the success message and show the success notification
            setSuccessToastMessage('He añadido tu Me Gusta');
            setShowSuccessToast(true);
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
                    <Button
                        variant={likedByMe ? 'success' : 'primary'}
                        onClick={() => {
                            authUser && !loading && handleLikeClick();
                        }}
                    >
                        Me Gusta
                    </Button>
                </Col>
                <Col xs={1} className="text-start">
                    <div>
                        <span className="likes-text">{localLikes}</span>
                    </div>
                </Col>
                <Col xs={4}>
                    <ToastContainer position="top-end">
                        <Toast
                            show={showSuccessToast}
                            onClose={() => setShowSuccessToast(false)}
                            autohide
                            delay={3000} // Duration to show the notification
                            bg="success"
                            text="white"
                        >
                            <Toast.Body>{successToastMessage}</Toast.Body>
                        </Toast>
                    </ToastContainer>
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
