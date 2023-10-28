import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useError } from '../../Hooks/useError';
import { createRecommendationService } from '../../services/recommendatonService';
import { handleAddFilePreview } from '../../utls/handleAddFilePreview';
import { handleRemoveFilePreview } from '../../utls/handleRemoveFilePreview';

const RecommendationCreateForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { setErrMsg } = useError();

    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('1'); // Default to gastronomico
    const [descripcion, setDescripcion] = useState('');
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRecommendationCreate = async () => {
        try {
            setLoading(true);
            const formData = new FormData();

            if (titulo.trim() === '' || tipo.trim() === '') {
                throw new Error('Título and Tipo are required fields.');
            }

            formData.append('titulo', titulo);
            formData.append('tipo', tipo);
            formData.append('descripcion', descripcion);


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

    return (
        <form
            className="Recommendation-create-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleRecommendationCreate();
            }}
        >
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
            >
                <option value="1">Gastronómico</option>
                <option value="2">Museos</option>
            </select>
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                maxLength="280"
            />

            <div className="img-prev-container">
                <button disabled={loading}>Enviar</button>
                <label htmlFor="file-input" className="custom-file-label">
                    <span>Seleccionar archivo</span>
                </label>
                <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={(e) =>
                        handleAddFilePreview(e, setFile, setPreviewUrl)
                    }
                />

                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Previsualización"
                        title="Eliminar imagen"
                        onClick={() => {
                            handleRemoveFilePreview(
                                fileInputRef,
                                setFile,
                                setPreviewUrl
                            );
                        }}
                    />
                )}
            </div>
        </form>
    );
};

export default RecommendationCreateForm;