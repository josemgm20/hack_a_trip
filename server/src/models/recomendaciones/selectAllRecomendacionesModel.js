// Importamos la conexión a la base de datos
const { getConnection } = require('../../db/getConnection');

const selectAllRecomendacionModel = async (usuarioId = 0) => {
    let connection;
    try {
        connection = await getConnection();

        const recomendaciones = await connection.query('SELECT * FROM recomendaciones');

        // Si no se encuentran recomendaciones, registramos un mensaje de error
        if (recomendaciones.length < 1) {
            console.error("No se encontraron recomendaciones");
        }

        // Devolvemos los registros de recomendaciones
        return recomendaciones;
    } finally {
        // Aseguramos que la conexión a la base de datos se libere, ya sea que haya ocurrido un error o no
        if (connection) connection.release();
    }
};

module.exports = selectAllRecomendacionModel;
