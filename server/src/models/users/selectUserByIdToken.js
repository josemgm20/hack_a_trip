const jwt = require('jsonwebtoken');
const { selectUserByIdModel } = require('../models/users'); // Ajusta la ruta según corresponda

const selectUserByIdToken = (req, res) => {
    const token = req.header('x-auth-token'); // Suponiendo que el token se pasa en el encabezado de la solicitud

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        // Verifica si el ID de usuario del token coincide con el de la consulta
        if (decoded.id === req.query.userId) {
            // Recupera el perfil del usuario utilizando el ID de usuario
            const user = selectUserByIdModel(decoded.id);

            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } else {
            return res.status(403).json({ message: 'El ID de usuario en el token no coincide con la consulta' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'El token no es válido' });
    }
};

module.exports = selectUserByIdToken;
