import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap'; // Import the Toast component from react-bootstrap

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
                        // Assume authLogin sets the error state if authentication fails
                        // Example: authLogin(email, password).catch((error) => setError(error.message));
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

                    <Toast
                        show={error ? true : false} // Show the Toast only if there is an error
                        onClose={() => setError(null)} // Close the Toast when onClose is called
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                        }}
                    >
                        <Toast.Header closeButton={false}>
                            <strong className="mr-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>

                    <p className="mt-3">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
                </form>
            </div>
        </div>
    );
};

SignOnForm.propTypes = {
    authLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default SignOnForm;
