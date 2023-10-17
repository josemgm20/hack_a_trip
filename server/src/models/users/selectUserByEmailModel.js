// Importacion de base de datos
const { getConnection } = require('../../db/getConnection');

const { invalidCredentialsError } = require('../../services/errorService.js');

const selectUserByEmailModel = async (email) => {
    let connection;

    try {
        const connection = await getConnection();

        const usuarios = await connection.query(
            `SELECT id, password FROM usuarios WHERE email = ?`,
            [email]
        );

        // Si no hay usuario lanzamos error
        if (usuarios.length < 1) {
            invalidCredentialsError();
        }

        // No existe mas de un usuario con el mismo email.
        return usuarios[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByEmailModel;
