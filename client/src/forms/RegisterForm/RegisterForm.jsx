// RegisterForm.jsx

// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los hooks.
import { useState } from 'react';

const RegisterForm = ({ authRegister, loading }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <>
            <h2>Registro</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    authRegister(username, email, password, repeatedPassword);
                }}
            >
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="pass">Contraseña:</label>
                <input
                    type="password"
                    id="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="8"
                    maxLength="100"
                    required
                />

                <label htmlFor="repeatedPass">Repetir contraseña:</label>
                <input
                    type="password"
                    id="repeatedPass"
                    value={repeatedPassword}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                    minLength="8"
                    maxLength="100"
                    required
                />

                <button disabled={loading}>Registrarse</button>
            </form>
        </>
    );
};

RegisterForm.propTypes = {
    authRegister: PropTypes.func.isRequired, // Función de registro
    loading: PropTypes.bool.isRequired, // Estado de carga
};

export default RegisterForm;
