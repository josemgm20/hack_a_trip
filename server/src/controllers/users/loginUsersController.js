const jwt = require('jsonwebtoken');

//Importamos los errores.
const {
    missingFieldsError,
    invalidCredentialsError,
} = require('../../services/errorService');

// Importamos encriptacion
const bcrypt = require('bcrypt');

// Importamos modelos
const { selectUserByEmailModel } = require('../../models/users');

const loginUsersController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            missingFieldsError();
        }

        //Obtenemos datos del usuario
        const usuario = await selectUserByEmailModel(email);

        //Comprobamos la contraseña
        const validPass = await bcrypt.compare(password, usuario.password);

        //Si la contraseña no coincide, lanzamos un error
        if (!validPass) {
            invalidCredentialsError();
        }

        const tokenInfo = {
            id: usuario.id,
        };

        //Generamos token
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUsersController;
