import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignOnForm = ({ authLogin, loading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    return (
        <div style={{ width: '20vw', marginBottom: '1vw' }}>
            <div className="container my-5">
                <h1 className="display-4">Iniciar Sesión en Tu Cuenta</h1>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            const response = await authLogin(email, password);
                            // Display a success message when authentication is successful
                            setMessage('Credenciales inválidas');
                        } catch (error) {
                            // Display an error message when authentication fails
                            setMessage('Error: ' + error.message);
                        }
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
                        show={message !== null && message !== ''} // Show the Toast only if there is a non-empty message
                        onClose={() => setMessage(null)} // Close the Toast when onClose is called
                        style={{
                            position: 'absolute',
                            top: '10px', // Adjust the top position to move the toast to the top
                            right: '10px', // Right position to make it appear on the top right
                        }}
                    >
                        <Toast.Header closeButton={false}>
                            <strong className="mr-auto">Notificación</strong>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>

                    <p className="mt-3">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
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
