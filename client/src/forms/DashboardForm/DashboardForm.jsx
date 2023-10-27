import React from 'react';
import PropTypes from 'prop-types';

const DashboardForm = ({ userData, loading }) => {
    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Bienvenido {userData.username || 'Usuario'}!</h2> {/* Provide a default value if username is not available. Adjust 'Usuario' to your preference. */}

            {userData ? (
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={userData.avatar_url || 'user_avatar_url_here'} // Provide a default avatar URL if not available
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
        id: PropTypes.number,
        username: PropTypes.string,
        email: PropTypes.string,
        avatar_url: PropTypes.string, // Add avatar_url to userData shape
    }),
    loading: PropTypes.bool.isRequired,
};

export default DashboardForm;
