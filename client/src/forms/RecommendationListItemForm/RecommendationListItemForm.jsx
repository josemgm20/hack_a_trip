import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { userPropTypes } from '../../utls/customPropTypes';
const baseURL = import.meta.env.VITE_API_URL;
import { useRecommendation } from '../../Hooks/useRecommendation';

import "./RecommendationListItemForm.css";

function RecommendationListItemForm({ recommendation }) {
    // Tienes acceso a las propiedades de la recomendación aquí
    const {
        id, // Ejemplo: Accede a la propiedad 'id'
        foto, // Accede a la propiedad 'foto'
        titulo, // Accede a la propiedad 'titulo'
        tipo, // Accede a la propiedad 'tipo'
        descripcion, // Accede a la propiedad 'descripcion'
        username, // Accede a la propiedad 'username'
        likes, // Accede a la propiedad 'likes'
        created_at, // Accede a la propiedad 'created_at'


    } = recommendation;
    const { deleteRecommendationsById, upvoteRecommendation } = useRecommendation();

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
                    onClick={() => upvoteRecommendation(recommendation.id)} // Pasa el ID de la recomendación
                    className="upvote-button"
                >
                    Me gusta
                </Button>
                <Button
                    variant="danger"
                    onClick={() => deleteRecommendationsById(recommendation.id)} // Pasa el ID de la recomendación
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
};

export default RecommendationListItemForm;
