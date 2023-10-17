import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import config from '../../config';
import { useNavigate } from 'react-router-dom'; // Corrected import

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Corrected variable name

    const handleSignIn = () => {
        const userData = {
            email,
            password,
        };

        fetch(`${config.serverUrl}:${config.serverPort}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    // Successful sign-in; redirect to the Dashboard
                    navigate('/dashboard'); // Corrected usage of the navigate function
                } else {
                    throw new Error('Sign-in failed');
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="display-4">Sign In to Your Account</h1>
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="button" className="btn btn-primary" onClick={handleSignIn}>
                        Sign In
                    </button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <p className="mt-3">Don't have an account? <a href="/register">Register here</a></p>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
