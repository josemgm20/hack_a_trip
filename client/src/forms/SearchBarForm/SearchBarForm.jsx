import React, { useState } from 'react';
import { useRecommendation } from '../../Hooks/useRecommendation';

function SearchBarForm() {
    const { setSearchParams, loading } = useRecommendation();

    const [keyword, setKeyword] = useState('');

    const handleSearchOrKeyPress = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (keyword) {
                setSearchParams({ keyword });
            } else {
                setSearchParams({});
            }
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar recomendación"
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={handleSearchOrKeyPress} // Activa la búsqueda al presionar la tecla ENTER
                value={keyword}
            />
            <button onClick={handleSearchOrKeyPress}>Buscar</button>
        </div>
    );
}

export default SearchBarForm;
