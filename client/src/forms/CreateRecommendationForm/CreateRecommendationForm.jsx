import React, { useState, useRef } from 'react'; // Import useRef
import { useNavigate } from 'react-router-dom';
import { useError } from '../../Hooks/useError'; // Check your import path, should it be '../../hooks/useError'?
import { createRecommendationService } from '../../services/recommendatonService'; // Correct the import path

import { handleAddFilePreview } from '../../utls/handleAddFilePreview'; // Check your import path
import { handleRemoveFilePreview } from '../../utls/handleRemoveFilePreview'; // Check your import path

const RecommendationCreateForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { setErrMsg } = useError();

    const [formData, setFormData] = useState({
        foto: null,
        titulo: '',
        tipo: 1,
        description: '',
    });
    const [previewUrl, setPreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'foto' && files.length) {
            console.log('File selected:', files[0]);
            handleAddFilePreview(e, setFormData, setPreviewUrl);
        } else {
            console.log('Form data updated:', name, value);
            setFormData({
                ...formData,
                [name]: name === 'tipo' ? parseInt(value) : value,
            });
        }
    };

    const handleRecommendationCreate = async () => {
        try {
            setLoading(true);
            console.log('Creating recommendation...');

            // Validate if a file is selected before submission
            if (!formData.foto) {
                throw new Error('Please select an image (foto) for the recommendation.');
            }

            const formDataToSend = new FormData();
            formDataToSend.append('foto', formData.foto);
            formDataToSend.append('titulo', formData.titulo);
            formDataToSend.append('tipo', formData.tipo);
            formDataToSend.append('description', formData.description);

            console.log('Submitting form data:', formDataToSend);
            const response = await createRecommendationService(formDataToSend);

            if (response.status === 'error') {
                console.error('API error:', response.message);
                throw new Error(response.message);
            }

            console.log('Recommendation created successfully.');
            navigate('/explore');
        } catch (err) {
            console.error('Error:', err.message);
            setErrMsg(err.message);
        } finally {
            console.log('Finishing recommendation creation...');
            setLoading(false);
        }
    };

    return (
        <form
            className="recommendation-create-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleRecommendationCreate();
            }}
        >
            <input
                type="file"
                id="foto-input"
                name="foto"
                accept=".jpg, .png"
                ref={fileInputRef}
                onChange={handleChange}
            />

            {previewUrl && (
                <img
                    src={previewUrl}
                    onClick={() => {
                        handleRemoveFilePreview(fileInputRef, setFormData, setPreviewUrl);
                    }}
                    alt="Previsualización"
                    title="Eliminar imagen"
                />
            )}

            <input
                type="text"
                name="titulo"
                placeholder="Title"
                value={formData.titulo}
                onChange={handleChange}
                required
            />

            <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
            >
                <option value={1}>Gastronomico</option>
                <option value={2}>Museos</option>
            </select>

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <button disabled={loading}>Create Recommendation</button>
        </form>
    );
};

export default RecommendationCreateForm;