import { useState } from 'react';
import PropTypes from 'prop-types';

import { getToken } from '../../utils/getToken.js';

const baseURL = 'http://localhost:8081';

const DashboardForm = ({ userData }) => {
    const [avatarFile, setAvatarFile] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file); // Store the actual file, not a URL
        }
    };

    const handleUpdateAvatar = () => {
        const token = getToken();
        if (avatarFile) {
            const formData = new FormData();
            formData.append('avatar', avatarFile, avatarFile.name); // Append the file and its name

            fetch(`${baseURL}/user`, {
                method: 'PUT',
                headers: {
                    Authorization: token,
                },
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Avatar updated successfully');
                    } else {
                        console.error('Failed to update avatar');
                    }
                })
                .catch((error) => {
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
                                src={avatarFile ? URL.createObjectURL(avatarFile) : `${baseURL}/${userData.avatar || 'image.jpeg'}`}
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
        avatar: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

export default DashboardForm;
