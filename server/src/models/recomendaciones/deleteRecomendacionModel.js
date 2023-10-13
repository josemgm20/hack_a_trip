// Importamos BBDD
const getConnection = require('../../db/getConnection');

//Importamos errores
const { unauthorizedUserError } = require('../../services/errorService');

//Funcion que conectara con BBDD y eliminara la recomendacion
const deleteRecomendacionModel = async (recomendacionId, usuarioId) => {
    let connection;
    try {
        connection = await getConnection();
        const [recomendacion] = await connection.query(
            `SELECT userID FROM recomendaciones WHERE id= ?`,
            [recomendacionId]
        );

        //Si no somos dueños de la recomendacion, lanzamos un error
        if (recomendacion[0].usuarioId !== usuarioId) {
            unauthorizedUserError();
        }

        //Eliminamos los likes de la recomendacion
        await connection.query(`DELETE FROM likes WHERE recomendacionId = ?`, [
            recomendacionId,
        ]);

        //Eliminamos la recomendacion
        await connection.query(`DELETE FROM recomendaciones WHERE id = ?`, [
            recomendacionId,
        ]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteRecomendacionModel;
