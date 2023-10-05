//Importamos la conexion con base de datos
const { getConnection } = require('../../db/getConnection');

// Importamos encriptacion
const bcrypt = require('bcrypt');

//Funcion que conectara a la base de datos y creara el usuario
const insertUserModel = async (username, email, password) => {
    // Creamos una variable que va almacenar la conexión libre
    let connection;

    try {
        // Aquí establecemos la conexión con la base de datos
        connection = await getConnection();

        // Comprobamos si existe en la base de datos algún usuario con el nombre que recibimos.
        let usuarios = await connection.query(
            `SELECT id FROM usuarios WHERE username = ?`,
            [username]
        );

        // Si existe algún usuario con ese nombre lanzamos un error.
        if (usuarios.length > 0) {
            const err = new Error('Ya existe un usuario con ese nombre');
            err.httpStatus = 409;
            throw err;
        }

        // Comprobamos si existe en la base de datos algún usuario con el email que recibimos.
        usuarios = await connection.query(
            `SELECT id FROM usuarios WHERE email = ?`,
            [email]
        );

        // Si existe algún usuario con ese email lanzamos un error.
        if (usuarios.length > 0) {
            const err = new Error('Ya existe un usuario con ese email');
            err.httpStatus = 409;
            throw err;
        }

        // Encriptacion de contraseña
        const hashedPass = await bcrypt.hash(password, 10);

        // Creamos el usuario en Base de datos
        await connection.query(
            `INSERT INTO usuarios(username, email, password) VALUES(?, ?, ?)`,
            [username, email, hashedPass]
        );
    } finally {
        if (connection) connection.release();
    }
};
module.exports = insertUserModel;
