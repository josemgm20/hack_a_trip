import PropTypes from 'prop-types';

// PropTypes para un objeto de publicación
export const tweetShape = PropTypes.shape({
    id: PropTypes.number.isRequired,     // ID único
    text: PropTypes.string.isRequired,   // Contenido del tweet
    image: PropTypes.string,            // URL de la imagen (opcional)
    username: PropTypes.string.isRequired, // Nombre de usuario del autor
    owner: PropTypes.bool.isRequired,    // ¿Es el usuario actual el propietario del tweet?
    likes: PropTypes.number.isRequired,  // Número de "me gusta"
    likedByMe: PropTypes.bool.isRequired, // ¿El usuario actual está entre los que han dado "me gusta"?
    userId: PropTypes.number.isRequired, // ID del usuario que publicó el tweet
    createdAt: PropTypes.string.isRequired, // Marca de tiempo de creación
});

// PropTypes para un objeto de usuario
export const userShape = PropTypes.shape({
    id: PropTypes.number.isRequired,     // ID de usuario único
    email: PropTypes.string.isRequired,  // Correo electrónico del usuario
    username: PropTypes.string.isRequired, // Nombre de usuario del usuario
    avatar: PropTypes.string,            // URL de la imagen de avatar del usuario (opcional)
    role: PropTypes.string.isRequired,   // Rol del usuario (p. ej., "admin" o "usuario")
    createdAt: PropTypes.string.isRequired, // Marca de tiempo de creación del usuario
});
