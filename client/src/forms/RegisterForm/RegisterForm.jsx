import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RegisterForm = ({ authRegister, loading }) => {
    // Definimos estados locales para los campos del formulario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <div style={{ width: '20vw', marginBottom: '1vw' }}>
            <h2>Registro</h2>

            {/* Formulario de registro */}
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    authRegister(username, email, password, repeatedPassword);
                }}
            >
                {/* Campo de Usuario */}
                <Form.Group className="mb-3">
                    <Form.Label>Usuario:</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>

                {/* Campo de Email */}
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>

                {/* Campo de Contraseña */}
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="8"
                        maxLength="100"
                        required
                    />
                </Form.Group>

                {/* Campo de Repetir Contraseña */}
                <Form.Group className="mb-3">
                    <Form.Label>Repetir contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                        minLength="8"
                        maxLength="100"
                        required
                    />
                </Form.Group>

                {/* Botón de Registro */}
                <Button type="submit" disabled={loading}>
                    Registrarse
                </Button>
            </Form>
        </div>
    );
};

// Definimos los tipos de propiedades requeridas
RegisterForm.propTypes = {
    authRegister: PropTypes.func.isRequired, // Función de registro
    loading: PropTypes.bool.isRequired, // Estado de carga
};

export default RegisterForm;
