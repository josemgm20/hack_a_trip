import React, { useState } from 'react';

function CreateRecommendationForm() {
    const [formData, setFormData] = useState({
        foto: '',
        titulo: '',
        tipo: 'gastronomico',
        description: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.titulo) {
            errors.titulo = 'Title is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // Here, you can submit the form data to your backend or perform any other actions.
                console.log(formData);
                // Clear the form after submission
                setFormData({
                    foto: '',
                    titulo: '',
                    tipo: 'gastronomico',
                    description: '',
                });
                setIsSubmitting(false);
            } catch (error) {
                console.error('An error occurred', error);
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div>
            <h2>Create Recommendation</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="foto" className="form-label">
                        Foto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="foto"
                        name="foto"
                        value={formData.foto}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">
                        Titulo
                    </label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.titulo ? 'is-invalid' : ''}`}
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.titulo && (
                        <div className="invalid-feedback">{formErrors.titulo}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">
                        Tipo
                    </label>
                    <select
                        className="form-select"
                        id="tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                    >
                        <option value="gastronomico">Gastronomico</option>
                        <option value="museos">Museos</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Creating...' : 'Create Recommendation'}
                </button>
            </form>
        </div>
    );
}

export default CreateRecommendationForm;
