const { getConnection } = require('../../db/getConnection');

//Importamos error

const { likeAlreadyExistsError } = require('../../services/errorService');

const insertLikeModel = async (recomendacionId, usuarioId) => {
    let connection;

    try {
        connection = await getConnection();

        // Comprobamos si el usuario ya ha dado Like
        const [likes] = await connection.query(
            `SELECT id FROM likes WHERE recomendacionId = ? AND usuarioId = ?`,
            [recomendacionId, usuarioId]
        );

        if (!likes || likes.length === 0) {
            // Handle the case where no records are found
            // Insert the like here
        } else {
            // Handle the case where the like already exists
            likeAlreadyExistsError;
        }

        await connection.query(
            `INSERT INTO likes(puntuacion, recomendacionId, usuarioId) VALUES(?, ?, ?)`,
            [puntuacion, recomendacionId, usuarioId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertLikeModel;
