
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


const RecommendationFooterCard = ({
    username,
    created_at
}) => {

    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <p className="recommendation-created">Created At: {created_at}</p>
        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {

    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,

};

export default RecommendationFooterCard;
