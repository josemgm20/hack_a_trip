import React, { useState } from 'react';
import PropTypes from 'prop-types';

//TEST

import { getToken } from '../../utls/getToken';
// URL base del API.
const baseURL = import.meta.env.VITE_API_URL;

const DashboardForm = ({ userData, loading }) => {
    const [avatarFile, setAvatarFile] = useState(null);

    const handleAvatarChange = (e) => {
        // Handle the user's avatar file selection
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(URL.createObjectURL(file));
        }
    };

    const handleUpdateAvatar = () => {
        const token = getToken();
        // Perform an API request to update the user's avatar
        if (avatarFile) {
            const formData = new FormData();
            formData.append('avatar', avatarFile);

            // You can use the fetch API or your preferred HTTP client library here
            fetch(`${baseURL}/user/avatar`, {
                method: 'PATCH',
                headers: {
                    Authorization: token,
                },
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        // Handle success
                        console.log('Avatar updated successfully');
                    } else {
                        // Handle errors
                        console.error('Failed to update avatar');
                    }
                })
                .catch((error) => {
                    // Handle network errors
                    console.error('Network error:', error);
                });
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Bienvenido {userData.username || 'Usuario'}!</h2>

            {userData ? (
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={avatarFile || userData.avatar_url || '/public/image.jpeg'}
                                className="img-fluid rounded-start"
                                alt="User Avatar"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                            <button onClick={handleUpdateAvatar}>Update Avatar</button>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">User Information</h5>
                                <p className="card-text">
                                    <strong>ID:</strong> {userData.id || 'N/A'}
                                </p>
                                <p className="card-text">
                                    <strong>Username:</strong> {userData.username || 'N/A'}
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong> {userData.email || 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando datos de usuario...</p>
            )}
        </div>
    );
};

DashboardForm.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        email: PropTypes.string,
        avatar_url: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

export default DashboardForm;
