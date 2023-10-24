// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los hooks.
import { useState } from 'react';

// Importamos el token
import { getToken } from '../../utils/getToken';

const token = getToken();

const RegisterPostForm = ({ token, loading }) => {
    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('');
    const [foto, setFoto] = useState('');
    const [descripcion, setDescripcion] = useState('');

    return (
        <>
            <h2>Crear Recomendacion</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    token;
                }}
            >
                <label htmlFor="titulo">Titulo:</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <label htmlFor="tipo">Tipo:</label>
                <input
                    type="select"
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                />

                <label htmlFor="foto">Foto:</label>
                <input
                    type="img"
                    id="foto"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                />

                <label htmlFor="descripcion">Descripcion:</label>
                <input
                    type="textarea"
                    id="repeatedPass"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <button disabled={loading}>Registrarse</button>
            </form>
        </>
    );
};

RegisterPostForm.propTypes = {
    token: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default RegisterPostForm;
