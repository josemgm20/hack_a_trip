import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
    fetchRecommendationService,
    createRecommendationService,
    handleUpvoteService,
    deleteRecommendationService,

} from '../services/recommendatonService'; // Corrected the import path
import { useError } from './useError';

export const useRecommendation = () => {
    const [sortingBy, setSortingBy] = useState('created_at');
    const [ascOrder, setAscOrder] = useState(false); // Initialize to descending order
    const [sortByLikes, setSortByLikes] = useState(false);
    const { setErrMsg } = useError();
    const [recommendations, setRecommendations] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const handleSearchOrKeyPress = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        }
    };

    const handleOrderByLikes = () => {
        setSortingBy('likes');
        setSortByLikes(!sortByLikes);
        setAscOrder(sortByLikes);
    };

    const handleOrderByDate = () => {
        setSortingBy('created_at');
        setSortByLikes(false);
        setAscOrder(true);
    };

    const sortRecommendations = (recommendationsToSort) => {
        return recommendationsToSort.slice().sort((a, b) => {
            if (sortingBy === 'likes') {
                return ascOrder ? a.likes - b.likes : b.likes - a.likes;
            } else if (sortingBy === 'created_at') {
                return ascOrder
                    ? new Date(a.created_at) - new Date(b.created_at)
                    : new Date(b.created_at) - new Date(a.created_at);
            }
            return 0;
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
                    setError(new Error('Formato de datos no válido'));
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
            const response = await handleUpvoteService(recommendationId);
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

    const handleRecommendationCreate = async (titulo, tipo, descripcion, file) => {
        try {
            setLoading(true);
            const formData = new FormData();

            if (titulo.trim() === '' || tipo.trim() === '') {
                throw new Error('Los campos Título y Tipo son obligatorios.');
            }

            formData.append('titulo', titulo);
            formData.append('tipo', tipo);

            if (descripcion.trim() !== '') {
                formData.append('descripcion', descripcion);
            }

            if (file) formData.append('foto', file);

            const body = await createRecommendationService(formData);

            if (body.status === 'error') {
                throw new Error(body.message);
            }

            navigate('/explore');
        } catch (err) {
            setErrMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        recommendations,
        loading,
        setSearchParams,
        upvoteRecommendation,
        deleteRecommendationsById,
        error,
        handleOrderByLikes,
        sortRecommendations,
        ascOrder,
        handleSearchOrKeyPress,
        handleRecommendationCreate,
        handleOrderByDate,
        sortingBy,
        setSortingBy,
        setAscOrder,
    };
};