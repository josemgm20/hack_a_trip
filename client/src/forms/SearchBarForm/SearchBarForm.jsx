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
        <div className="search-bar-container bg-light p-3">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for recommendations"
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={handleSearchOrKeyPress}
                    value={keyword}
                    style={{ width: '60%' }} // Apply a custom width style
                />
                <button
                    className="btn btn-primary"
                    onClick={handleSearchOrKeyPress}

                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBarForm;
