import React from 'react';
import CreateRecommendationForm from '../../forms/CreateRecommendationForm/CreateRecommendationForm';

import './CreateRecommendationPage'

function CreateRecommendationPage() {
    return (
        <div className="container container-create">
            <h2 className="text-center-create">Crear Recomendación</h2>
            <CreateRecommendationForm />
        </div>
    );
}

export default CreateRecommendationPage;
