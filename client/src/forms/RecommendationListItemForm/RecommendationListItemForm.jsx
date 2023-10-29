
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utils/customPropTypes';
const baseURL = 'http://localhost:8081';

import "./RecommendationListItemForm.css"


function RecommendationListItemForm({
    recommendation,
    upvoteRecommendation,
    deleteRecommendationsById,
}) {
    const {
        id,
        // foto, comentado hasta que se corrija la base de datos
        titulo,
        tipo,
        descripcion,
        username,
        likes,
        created_at,
    } = recommendation;

    return (
        <Card className="recommendation-card card-custom mx-auto" style={{ maxWidth: "40vw" }}>
            <Card.Img
                variant="top"
                src={recommendation.foto ? `${baseURL}/${recommendation.foto}` : 'view.jpg'}
                className="recommendation-image"
                alt="View"

            />
            <Card.Body className="recommendation-card-body card-custom-body">
                <Card.Title className="recommendation-title ">{titulo}</Card.Title>
                <Card.Text className="recommendation-description">{descripcion}</Card.Text>
                <p className="recommendation-id">Recommendation ID: {id}</p>
                <p className="recommendation-type">Type: {tipo}</p>
                <p className="recommendation-username">Username: {username}</p>
                <p className="recommendation-likes">Likes: {likes}</p>
                <p className="recommendation-created">Created At: {created_at}</p>
            </Card.Body>
            <Card.Body className="recommendation-buttons">
                <Button
                    variant="success"
                    onClick={() => upvoteRecommendation(id)}
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
            </Card.Body>
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
        likedByMe: PropTypes.bool.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    deleteRecommendationsById: PropTypes.func.isRequired,
};

export default RecommendationListItemForm;
