const { getConnection } = require('../../db/getConnection');

const { notFoundError } = require('../../services/errorService.js');

const selectUserByIdModel = async (id) => {
    let connection;

    try {
        const connection = await getConnection();

        // Localizamos por id
        const usuarios = await connection.query(
            `SELECT id FROM usuarios WHERE id = ?`,
            [id]
        );

        // Si no hay usuario lanzamos error
        if (usuarios.length < 1) {
            notFoundError('usuario');
        }

        // No existe mas de un usuario con el mismo email.
        return usuarios[0];
    } finally {
        if (connection) connection.release();
    }
};
module.exports = selectUserByIdModel;
