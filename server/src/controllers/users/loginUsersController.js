const jwt = require('jsonwebtoken');

<<<<<<< HEAD
// Importar funciones de manejo de errores
const { errorController, invalidCredentialsError } = require('../../services/errorService');

// Importar bcrypt para el cifrado de contraseñas
const bcrypt = require('bcrypt');

// Importar el modelo de usuario para la recuperación de datos de usuario
=======
//Importamos los errores.
const {
    missingFieldsError,
    invalidCredentialsError,
} = require('../../services/errorService');

// Importamos encriptacion
const bcrypt = require('bcrypt');

// Importamos modelos
>>>>>>> origin/javi
const { selectUserByEmailModel } = require('../../models/users');

const loginUsersController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Comprobar campos faltantes
        if (!email || !password) {
            errorController();
        }

<<<<<<< HEAD
        // Obtener los datos del usuario por correo electrónico
        const user = await selectUserByEmailModel(email);
=======
        //Obtenemos datos del usuario
        const usuario = await selectUserByEmailModel(email);
>>>>>>> origin/javi

        // Comparar la contraseña proporcionada con la contraseña almacenada cifrada
        const validPassword = await bcrypt.compare(password, user.password);

        // Si la contraseña no coincide, lanzar un error
        if (!validPassword) {
            invalidCredentialsError();
        }

        // Preparar la información del usuario para incluir en la carga útil del JWT
        const tokenInfo = {
            id: user.id,
        };

        // Generar un token JWT
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d', // El token expira en 7 días
        });

        // Responder con un mensaje de éxito y el token y la información del usuario
        res.send({
            status: 'ok',
            data: {
                token: token,

            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUsersController;
