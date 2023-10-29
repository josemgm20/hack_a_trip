import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getToken } from '../../utls/getToken';

const baseURL = import.meta.env.VITE_API_URL;

const DashboardForm = ({ userData, loading }) => {
    const [avatarFile, setAvatarFile] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file); // Almacena el archivo real, no una URL
        }
    };

    const handleUpdateAvatar = () => {
        const token = getToken();
        if (avatarFile) {
            const formData = new FormData();
            formData.append('avatar', avatarFile, avatarFile.name); // Agrega el archivo y su nombre
            fetch(`${baseURL}/user`, {
                method: 'PUT',
                headers: {
                    Authorization: token,
                },
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Avatar actualizado exitosamente');
                    } else {
                        console.error('Fallo al actualizar el avatar');
                    }
                })
                .catch((error) => {
                    console.error('Error de red:', error);
                });
        }
    };

    return (
        <div>
            <h1 className="text-center mb-4">Dashboard</h1>
            {userData ? (
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={avatarFile ? URL.createObjectURL(avatarFile) : `${baseURL}/${userData.avatar || 'image.jpeg'}`}
                                className="img-fluid rounded-start"
                                alt="User Avatar"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="form-control mt-2"
                            />
                            <button
                                onClick={handleUpdateAvatar}
                                className="btn btn-primary mt-2"
                            >
                                Update Avatar
                            </button>
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
                <p className="text-center">Loading user data...</p>
            )}
        </div>
    );
};

DashboardForm.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

export default DashboardForm;
