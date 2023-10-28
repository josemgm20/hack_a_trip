<<<<<<< HEAD
// Importa el módulo de conexión a la base de datos
const { getConnection } = require('../../db/getConnection');

// Importa la función de manejo de errores para credenciales inválidas
const { invalidCredentialsError } = require('../../services/errorService.js');

// Función para seleccionar un usuario por su correo electrónico desde la base de datos
=======
// Importacion de base de datos
const { getConnection } = require('../../db/getConnection');

const { invalidCredentialsError } = require('../../services/errorService.js');

>>>>>>> origin/javi
const selectUserByEmailModel = async (email) => {
    let connection;

    try {
<<<<<<< HEAD
        // Establece una conexión a la base de datos
        connection = await getConnection();

        // Consulta la base de datos para seleccionar un usuario por su correo electrónico
=======
        const connection = await getConnection();

>>>>>>> origin/javi
        const usuarios = await connection.query(
            `SELECT id, password FROM usuarios WHERE email = ?`,
            [email]
        );

<<<<<<< HEAD
        // Si no se encuentra ningún usuario con el correo electrónico proporcionado, genera un error de "credenciales inválidas"
=======
        // Si no hay usuario lanzamos error
>>>>>>> origin/javi
        if (usuarios.length < 1) {
            invalidCredentialsError();
        }

<<<<<<< HEAD
        // Devuelve el ID y la contraseña del usuario
        return usuarios[0];
    } finally {
        // Asegura que la conexión a la base de datos se libere, ya sea que haya ocurrido un error o no
=======
        // No existe mas de un usuario con el mismo email.
        return usuarios[0];
    } finally {
>>>>>>> origin/javi
        if (connection) connection.release();
    }
};

module.exports = selectUserByEmailModel;
