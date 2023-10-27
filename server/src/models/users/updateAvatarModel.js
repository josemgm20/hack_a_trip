// Importamos la función que nos permite obtener una conexión a la base de datos.
const { getConnection } = require('../../db/getConnection');

// Función que se conectará a la base de datos y actualizará el avatar de un usuario.
const updateAvatarModel = async (avatarName, Id) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(`UPDATE usuarios SET avatar = ? WHERE id = ?`, [
            avatarName,
            Id,
        ]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateAvatarModel;
