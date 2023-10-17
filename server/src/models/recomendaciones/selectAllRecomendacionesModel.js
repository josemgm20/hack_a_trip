//Importamos la conexion con base de datos
const { getConnection } = require('../../db/getConnection');

const selectAllRecomendacionModel = async () => {
    // Creamos una variable para almacenar la conexion libre
    let connection;
    try {
        connection = await getConnection((usuarioId = 0));

        const [recomendaciones] = await connection.query(
            `select
            r.id,
            r.titulo,
            r.tipo,
            r.foto,
            count(l.id) as likes,
            r.usuarioId,
            u.username,
            r.usuarioId = ? as owner,
            r.created_at
        from
            recomendaciones r
        inner join usuarios u on
            u.id = r.usuarioId
        left join likes l on
            l.recomendacionId = r.id
        group by
            r.id ;`,
            [usuarioId]
        );

        return recomendaciones;
    } finally {
        if (connection) connection.release();
    }
};
module.exports = selectAllRecomendacionModel();
