require('dotenv').config();

const { getConnection } = require('./getConnection');

// Creamos las tablas de la base de datos
async function main() {
    let connection;

    try {
        connection = await getConnection();

        console.log(connection);

        console.log('Borrando tablas');

        await connection.query('DROP TABLE IF EXISTS likes');
        await connection.query('DROP TABLE IF EXISTS recomendaciones');
        await connection.query('DROP TABLE IF EXISTS usuarios');

        console.log('Creando tablas');

        await connection.query(`
            CREATE TABLE usuarios(
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username varchar(50) UNIQUE NOT NULL,
                email varchar(50) UNIQUE NOT NULL,
                password varchar(100) NOT NULL,
                created_at datetime default current_timestamp,
                modified_at datetime on update current_timestamp
            );
        `);

        await connection.query(`
            CREATE TABLE recomendaciones(
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                titulo varchar(50) NOT NULL,
                tipo enum('gastronómico', 'museos') NOT NULL,
                foto varchar(100),
                descripcion varchar(280),
                usuarioId INT UNSIGNED NOT NULL,
                foreign key(usuarioId) references usuarios(id),
                created_at datetime default current_timestamp,
                modified_at datetime on update current_timestamp
            );
        `);
        await connection.query(`
            CREATE TABLE likes(
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                puntuacion INT UNSIGNED,
                usuarioId INT UNSIGNED NOT NULL,
                recomendacionId INT UNSIGNED NOT NULL,
                foreign key(usuarioId) references usuarios(id),
                foreign key(recomendacionId) references recomendaciones(id),
                created_at datetime default current_timestamp,
                modified_at datetime on update current_timestamp
            );
        `);

        console.log('Tablas creadeas');
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) connection.release();
        process.exit();
    }
}

main();
