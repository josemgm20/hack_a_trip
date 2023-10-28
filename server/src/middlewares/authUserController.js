// Importamos dependencias.
const jwt = require('jsonwebtoken');

<<<<<<< HEAD
// Importamos errores.
const {
    invalidTokenError,
    notAuthenticatedError,
} = require('../services/errorService');

// Funcion controladora intermedia, comprueba si el usuario está autenticado

const authUserController = async (req, res, next) => {
    try {
        // Obtenemos el token de la cabecera de la petición.
        const { authorization } = req.headers;
        if (!authorization) {
            notAuthenticatedError; // 
        }

        // Variable que almacenará la información del token desencriptado.
=======
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
>>>>>>> origin/javi
        let userInfo;
        try {
            userInfo = jwt.verify(authorization, process.env.SECRET);

<<<<<<< HEAD
            // Agregamos una nueva propiedad inventada por nosotros
            req.user = userInfo;

            // Pasamos el control a la siguiente función controladora.
            next();
        } catch (err) {
            console.error(err);
<<<<<<< HEAD
            invalidTokenError(); // Corrected the function call
=======
            // Agregamos una nueva propiedad inventadoa por nosotros
            req.user = userInfo;

            //Pasamos el control a la siguiente funcion controladora.
            next();
        } catch (err) {
            console.error(err);
            invalidTokenError();
>>>>>>> origin/javi
=======
            invalidTokenError(); // 
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
        }
    } catch (err) {
        next(err);
    }
};
<<<<<<< HEAD

module.exports = authUserController;


=======
module.exports = authUserController;
>>>>>>> origin/javi
