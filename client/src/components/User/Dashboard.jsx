import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import config from '../../config';

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data using the stored token (you need to implement this on the server)
        const token = localStorage.getItem('userToken');
        console.log('Stored Token:', token);

        if (token) {
            fetch(`${config.serverUrl}:${config.serverPort}/users`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    console.log('Response Status:', response.status); // Log the status code
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                })
                .then((userData) => {
                    console.log('Fetched User Data:', userData);
                    setUser(userData);
                })
                .catch((error) => {
                    console.error('Fetch Error:', error);
                });
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="display-4">Welcome to your Dashboard</h1>
                {user ? (
                    <div>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
