import React, { useState } from 'react';
import { useRecommendation } from '../../Hooks/useRecommendation';



function SearchBarForm() {
    const {
        searchParams,
        setSearchParams,
        fetchRecommendations, // A function to fetch recommendations
    } = useRecommendation();



    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar recomendación"
                onChange={(e) => setSearchParams(e.target.value)}
                value={searchParams}
            />
            <button onClick={fetchRecommendations}>Buscar</button>
        </div>
    );
}

export default SearchBarForm;
