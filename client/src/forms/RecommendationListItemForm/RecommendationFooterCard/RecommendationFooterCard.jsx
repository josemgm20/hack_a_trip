import { useState, useEffect } from 'react';
import { Card, Button, Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecommendationFooterCard({ username, created_at, upvoteRecommendation, id, authUser, isUpvoted }) {
    const [hasUpvoted, setHasUpvoted] = useState(isUpvoted); // Initialize the state with the isUpvoted prop

    const handleUpvote = async () => {
        if (authUser) {
            if (!hasUpvoted) {
                try {
                    // Call the upvoteRecommendation function and await its response.
                    const confirmation = await upvoteRecommendation(id);

                    if (confirmation) {
                        // Successfully upvoted, update the state to reflect that the user has upvoted.
                        setHasUpvoted(true);
                        console.log("Me gusta added successfully!");
                    } else {
                        // Handle the case where the upvote was not successful (e.g., if the API call fails).
                        // You can display a Toast or handle errors here.
                        console.log("Me gusta was not added successfully.");
                    }
                } catch (error) {
                    // Handle any errors that may occur during the upvoting process.
                    // You can display a Toast or handle errors here.
                    console.error("Error during upvoting:", error);
                }
            } else {
                console.log("You have already upvoted this recommendation.");
            }
        } else {
            console.log("User not authenticated. Please log in to upvote.");
            // You can also display a message or redirect the user to the login page.
        }
    }

    return (
        <Card.Footer className="recommendation-buttons">
            <p className="recommendation-username">Username: {username}</p>
            <p className="recommendation-created">Created At: {created_at}</p>
            {authUser && ( // Conditionally render the upvote button if the user is authenticated
                <Button
                    variant="success"
                    onClick={handleUpvote}
                    className="upvote-button"
                    disabled={hasUpvoted}
                >
                    Me gusta
                </Button>
            )}
        </Card.Footer>
    );
}

RecommendationFooterCard.propTypes = {
    authUser: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    upvoteRecommendation: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    // Pass the upvote status for the recommendation.
    isUpvoted: PropTypes.bool,
};

export default RecommendationFooterCard;
