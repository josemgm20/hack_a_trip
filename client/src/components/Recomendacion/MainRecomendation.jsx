import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecommendationMain.css'; // Import your CSS file
import { useRecommendations } from '../../Hooks/useRecommendation'; // Import the hook

const RecommendationMain = () => {
    const { recommendations, loading, upvoteRecommendation, downvoteRecommendation } = useRecommendations();

    useEffect(() => {
        // You don't need to fetch recommendations here; it's handled by the useRecommendations hook.
    }, []);

    return (
        <div className="container">
            <h1 className="mt-5 mb-4">Recommendations</h1>
            <div className="row">
                {loading ? (
                    <p>Loading recommendations...</p>
                ) : (
                    recommendations.map((recommendation) => (
                        <div key={recommendation.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={recommendation.foto} className="card-img-top" alt="Recommendation" />
                                <div className="card-body">
                                    <h5 className="card-title">{recommendation.titulo}</h5>
                                    <p className="card-text">{recommendation.descripcion}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Likes: {recommendation.likes}</li>
                                    <li className="list-group-item">
                                        <button onClick={() => upvoteRecommendation(recommendation)} className="btn btn-success">
                                            Upvote
                                        </button>
                                        <button onClick={() => downvoteRecommendation(recommendation)} className="btn btn-danger">
                                            Downvote
                                        </button>
                                    </li>
                                    <li className="list-group-item">Created at: {recommendation.created_at}</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/your-route" className="card-link">Card link</Link>
                                    <Link to="/another-route" className="card-link">Another link</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecommendationMain;
