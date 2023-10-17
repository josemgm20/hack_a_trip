const { getConnection } = require('../db/getConnection');
const { notFoundError } = require('../services/errorService');

const recomendacionExistsController = async (req, res, next) => {
    let connection;

    try {
        connection = await getConnection();

        const { recomendacionId } = req.params;
        const [recomendaciones] = await connection.query(
            `select id from recomendaciones where id = ?`,
            [recomendacionId]
        );

        if (recomendaciones.length < 1) {
            notFoundError('recomendacion');
        }

        //Pasamos el control al siguiente middleware
        next();
    } finally {
        if (connection) connection.release();
    }
};

module.exports = recomendacionExistsController;
