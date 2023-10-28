import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useSearchParams and useNavigate
import { fetchRecommendationService } from '../services/recommendatonService';
import { useError } from './useError'

export const useRecommendation = () => {
    const { setErrMsg } = useError();

    const [recommendations, setRecommendations] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at'); // Error no identificado para revisión
    const [ascOrder, setAscOrder] = useState(false);
    const [keyword, setKeyword] = useState('') // Error no identificado para revisión

    const navigate = useNavigate();  // Error no identificado para revisión


    const handleSearchOrKeyPress = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        }
    };

    const handleOrderByChange = () => { // Remove event parameter
        // Toggle ascending/descending order
        setAscOrder(!ascOrder);
    };

    const sortRecommendations = (recommendationsToSort) => {
        return recommendationsToSort.slice().sort((a, b) => {
            if (orderBy === 'likes') {
                return ascOrder ? a.likes - b.likes : b.likes - a.likes;
            } else if (orderBy === 'created_at') {
                return ascOrder
                    ? new Date(a.created_at) - new Date(b.created_at)
                    : new Date(b.created_at) - new Date(a.created_at);
            }
            return 0; // Default case, no sorting
        });
    };

    useEffect(() => {
        const fetchRecommendationsData = async () => {
            try {
                setLoading(true);
                const body = await fetchRecommendationService(searchParams);
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
    }, [searchParams, setErrMsg]);

    const upvoteRecommendation = async (recommendationId) => {
        try {
            // Send an API request to upvote a recommendation
            // Update the 'recommendations' state after a successful API response
            const response = await fetchRecommendationService.upvote(recommendationId);
            if (response.success) {
                const updatedRecommendations = recommendations.map((currentRecommendation) => {
                    if (currentRecommendation.id === recommendationId) {
                        const likedByMe = !currentRecommendation.likedByMe;
                        const likes = likedByMe ? currentRecommendation.likes + 1 : currentRecommendation.likes - 1;
                        return { ...currentRecommendation, likedByMe, likes };
                    }
                    return currentRecommendation;
                });
                setRecommendations(updatedRecommendations);
            } else {
                setError(new Error(response.message));
            }
        } catch (error) {
            setError(error);
        }
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
        handleOrderByChange,
        sortRecommendations,
        orderBy,
        ascOrder,
        handleSearchOrKeyPress,
    };
};