// SignOnForm.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignOnForm = ({ authLogin, loading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    return (
        <div style={{ width: '20vw', marginBottom: '1vw' }}>
            <div className="container my-5">
                <h1 className="display-4">Iniciar Sesión en Tu Cuenta</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        authLogin(email, password);
                    }}
                >
                    <div className="form-group">
                        <label>Correo Electrónico:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Iniciar Sesión
                    </button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <p className="mt-3">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
                </form>
            </div>
        </div>
    );
};

SignOnForm.propTypes = {
    authLogin: PropTypes.func.isRequired, // Función de autenticación
    loading: PropTypes.bool.isRequired, // Estado de carga
};

export default SignOnForm;
