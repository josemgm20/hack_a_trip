<<<<<<< HEAD
// Importa el módulo de conexión a la base de datos
const { getConnection } = require('../../db/getConnection');

// Importa la función de manejo de errores
const { notFoundError } = require('../../services/errorService.js');

// Función para seleccionar un usuario por su ID en la base de datos
=======
const { getConnection } = require('../../db/getConnection');

const { notFoundError } = require('../../services/errorService.js');

>>>>>>> origin/javi
const selectUserByIdModel = async (id) => {
    let connection;

    try {
<<<<<<< HEAD
        // Establece una conexión a la base de datos
        connection = await getConnection();

        // Consulta la base de datos para seleccionar un usuario por su ID
        const usuarios = await connection.query(
            `SELECT id, username, email FROM usuarios WHERE id = ?`,
            [id]
        );

        // Si no se encuentra ningún usuario con el ID proporcionado, genera un error de "no encontrado"
=======
        const connection = await getConnection();

        // Localizamos por id
        const usuarios = await connection.query(
            `SELECT id FROM usuarios WHERE id = ?`,
            [id]
        );

        // Si no hay usuario lanzamos error
>>>>>>> origin/javi
        if (usuarios.length < 1) {
            notFoundError('usuario');
        }

<<<<<<< HEAD
        // Devuelve el ID del usuario
        return usuarios[0];
    } finally {
        // Asegura que la conexión a la base de datos se libere, ya sea que haya ocurrido un error o no
        if (connection) connection.release();
    }
};

=======
        // No existe mas de un usuario con el mismo email.
        return usuarios[0];
    } finally {
        if (connection) connection.release();
    }
};
>>>>>>> origin/javi
module.exports = selectUserByIdModel;
