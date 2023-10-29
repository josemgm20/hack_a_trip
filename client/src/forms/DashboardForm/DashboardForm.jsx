import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toast, Modal, Button } from 'react-bootstrap'; // Import necessary components

import { getToken } from '../../utls/getToken';

const baseURL = import.meta.env.VITE_API_URL;

const DashboardForm = ({ userData, loading }) => {
    const [avatarFile, setAvatarFile] = useState(null);
    const [updatingAvatar, setUpdatingAvatar] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false); // Add showConfirmation state
    const [confirmed, setConfirmed] = useState(false); // Add confirmed state

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
        }
    };

    const handleUpdateAvatar = () => {
        if (avatarFile) {
            setShowConfirmation(true); // Show confirmation modal
        }
    };

    const handleConfirm = () => {
        const token = getToken();
        if (avatarFile) {
            setUpdatingAvatar(true);
            const formData = new FormData();
            formData.append('avatar', avatarFile, avatarFile.name);
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
                        setToastMessage('Avatar updated successfully');
                    } else {
                        console.error('Fallo al actualizar el avatar');
                        setToastMessage('Failed to update avatar');
                    }
                })
                .catch((error) => {
                    console.error('Error de red:', error);
                    setToastMessage('Network error');
                })
                .finally(() => {
                    setUpdatingAvatar(false);
                    setShowToast(true);
                    setShowConfirmation(false); // Hide confirmation modal
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
                                src={avatarFile
                                    ? URL.createObjectURL(avatarFile)
                                    : `${baseURL}/${userData.avatar || 'image.jpeg'}`}
                                className="img-fluid rounded-start"
                                alt="User Avatar"
                                style={{ maxWidth: '10vw' }}
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
                                disabled={updatingAvatar}
                            >
                                {updatingAvatar ? 'Updating Avatar...' : 'Update Avatar'}
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

            <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Avatar Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to update your avatar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { setShowConfirmation(false); handleConfirm(); }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}
            >
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
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