import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useError } from '../../Hooks/useError';
import { useRecommendation } from '../../Hooks/useRecommendation'; // Import the useRecommendation hook
import { handleAddFilePreview } from '../../utls/handleAddFilePreview';
import { handleRemoveFilePreview } from '../../utls/handleRemoveFilePreview';

const RecommendationCreateForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { setErrMsg } = useError();

    // Importa la función handleRecommendationCreate del gancho useRecommendation
    const { handleRecommendationCreate } = useRecommendation();

    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('1'); // Por defecto, gastronómico
    const [descripcion, setDescripcion] = useState('');
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleRecommendationCreate(titulo, tipo, descripcion, file);
        } catch (err) {
            setErrMsg(err.message);
        }
    };

    return (
        <form className="Recommendation-create-form"
            onSubmit={handleSubmit}>
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

