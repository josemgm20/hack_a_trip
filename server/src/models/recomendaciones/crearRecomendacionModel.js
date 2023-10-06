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
        const recomendacion = await connection.query(
            `INSERT INTO recomendaciones(titulo, tipo, foto, descripcion, id_usuario) VALUES(?, ?, ?, ?)`,
            [titulo, tipo, foto, descripcion, id_usuario]
        );

        //Retornamos el id de la recomendacion que acabamos de insertar.
        return recomendacion.insertId;
    } finally {
        if (connection) connection.release();
    }
};
module.exports = crearRecomendacionModel();
