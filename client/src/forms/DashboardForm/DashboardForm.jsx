// DashboardForm.jsx

// Importamos los prop-types.
import PropTypes from 'prop-types';

const DashboardForm = ({ userData, loading }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {userData ? (
                <div>
                    <p><strong>ID:</strong> {userData.id}</p>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    {/* Agregar más datos del usuario aquí */}
                </div>
            ) : (
                <p>Cargando datos de usuario...</p>
            )}
        </div>
    );
};

DashboardForm.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number.isRequired, // ID del usuario
        username: PropTypes.string.isRequired, // Nombre de usuario
        email: PropTypes.string.isRequired, // Correo electrónico
        // Agregar más PropTypes para propiedades de datos adicionales del usuario
    }),
    loading: PropTypes.bool.isRequired, // Estado de carga
};

export default DashboardForm;
