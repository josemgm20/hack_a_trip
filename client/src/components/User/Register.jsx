import React, { useState } from 'react';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        // Create an object with user data
        const userData = { username, password, email };

        // Make a POST request to your Node server to register the user
        fetch(`${config.serverUrl}:${config.serverPort}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from your server (e.g., display success or error message)
                console.log(data);
            })
            .catch((error) => {
                console.error('Registration error:', error);
            });
    };

    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="display-4">User Registration</h1>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleRegister}>
                        Register
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
