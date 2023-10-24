import React from 'react';
import PropTypes from 'prop-types';

const DashboardForm = ({ userData, loading }) => {
    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Bienvenido {userData.username}!</h2>

            {userData ? (
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="user_avatar_url_here" // Replace with the actual URL of the user's avatar
                                className="img-fluid rounded-start"
                                alt="User Avatar"
                            />
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
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    loading: PropTypes.bool.isRequired,
};

export default DashboardForm;
