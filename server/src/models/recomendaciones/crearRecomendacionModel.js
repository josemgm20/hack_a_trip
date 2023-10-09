//Importamos la conexion con base de datos
const { getConnection } = require('../../db/getConnection');

const crearRecomendacionModel = async (titulo, tipo, foto, descripcion) => {
    // Creamos una variable para almacenar la conexion libre
    let connection;
    try {
        //Hacemos la conexion con base de datos
        connection = await getConnection();

        //

        //Creamos la recomendacion en Base de Datos
        await connection.query(
            `INSERT INTO recomendaciones(titulo, tipo, foto, descripcion) VALUES(?, ?, ?)`,
            [titulo, tipo, foto, descripcion]
        );
    } finally {
        if (connection) connection.release();
    }
};
module.exports = crearRecomendacionModel();
