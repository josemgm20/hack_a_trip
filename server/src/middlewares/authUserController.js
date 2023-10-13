// Importamos dependencias.
const jwt = require('jsonwebtoken');

//Importamos errores.
const {
    invalidTokenError,
    notAutheticatedError,
} = require('../services/errorService');

// Funcion controladora intermedia, comprueba si el user esta logeado

const authUserController = async (req, res, next) => {
    try {
        // Obtenemos le token de cabecera de la peticion.
        const { authorization } = req.headers;
        if (!authorization) {
            notAutheticatedError;
        }

        // Variable que almacenara la informacion del token desencriptado.
        let userInfo;
        try {
            userInfo = jwt.verify(authorization, process.env.SECRET);

            // Agregamos una nueva propiedad inventadoa por nosotros
            req.user = userInfo;

            //Pasamos el control a la siguiente funcion controladora.
            next();
        } catch (err) {
            console.error(err);
            invalidTokenError();
        }
    } catch (err) {
        next(err);
    }
};
module.exports = authUserController;
