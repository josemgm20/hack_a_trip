import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useError } from '../../Hooks/useError';
import { useRecommendation } from '../../Hooks/useRecommendation';
import { handleAddFilePreview } from '../../utls/handleAddFilePreview';
import { handleRemoveFilePreview } from '../../utls/handleRemoveFilePreview';
import { Form, Button, InputGroup } from 'react-bootstrap';

import './CreateRecommendationForm.css'

const RecommendationCreateForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { setErrMsg } = useError();
    const { handleRecommendationCreate } = useRecommendation();

    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('1');
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
        <Form className="recommendation-create-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                >
                    <option value="1">Gastronómico</option>
                    <option value="2">Museos</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    maxLength="280"
                />
            </Form.Group>
            <div className="img-prev-container">
                <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                >
                    Enviar
                </Button>
                <InputGroup>
                    <Form.Control
                        type="file"
                        id="file-input"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={(e) =>
                            handleAddFilePreview(e, setFile, setPreviewUrl)
                        }
                    />
                    <InputGroup.Text>Seleccionar archivo</InputGroup.Text>
                </InputGroup>
                {previewUrl && (
                    <div className="image-preview" >
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
                    </div>
                )}
            </div>
        </Form>
    );
};

export default RecommendationCreateForm;
