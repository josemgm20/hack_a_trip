import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useSearchParams and useNavigate
import { fetchRecommendationService } from '../services/recommendatonService';

export const useRecommendation = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams(); // Use useSearchParams to get search parameters
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        const fetchRecommendationsData = async () => {
            try {
                setLoading(true);

                // Fetch data based on searchParams
                const body = await fetchRecommendationService(searchParams); // Use searchParams directly
                console.log('API Response:', body);

                if (body.data && Array.isArray(body.data.recomendaciones)) {
                    setRecommendations(body.data.recomendaciones);
                } else {
                    setError(new Error('Invalid data format'));
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendationsData();
    }, [searchParams]);

    const upvoteRecommendation = (recommendationId) => {
        const newRecommendations = recommendations.map((currentRecommendation) => {
            if (currentRecommendation.id === recommendationId) {
                const likedByMe = !currentRecommendation.likedByMe;
                const likes = likedByMe
                    ? currentRecommendation.likes + 1
                    : currentRecommendation.likes - 1;

                return {
                    ...currentRecommendation,
                    likedByMe,
                    likes,
                };
            }
            return currentRecommendation;
        });

        setRecommendations(newRecommendations);
    };

    const deleteRecommendationsById = (recommendationId) => {
        const newRecommendations = recommendations.filter(
            (currentRecommendation) => currentRecommendation.id !== recommendationId
        );

        setRecommendations(newRecommendations);
    };



    return {
        recommendations,
        loading,
        setSearchParams,
        upvoteRecommendation,
        deleteRecommendationsById,
        error,
    };
};
