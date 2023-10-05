require('dotenv').config();

const { getConnection } = require('./getConnection');

// Creamos las tablas de la base de datos
async function main() {
    let connection;

    try {
        connection = await getConnection();

        console.log(connection);

        console.log('Borrando tablas');

        await connection.query('DROP TABLE IF EXISTS recomendaciones');
        await connection.query('DROP TABLE IF EXISTS direccion');
        await connection.query('DROP TABLE IF EXISTS datos_usuarios');
        await connection.query('DROP TABLE IF EXISTS usuarios');

        console.log('Creando tablas');

        await connection.query(`
            CREATE TABLE usuarios(
                id int unsigned primary key auto_increment,
                username varchar(50) unique not null,
                email varchar(50) unique not null,
                password varchar(100) not null,
                created_at datetime default current_timestamp,
                modified_at datetime on update current_timestamp
            );
        `);

        await connection.query(`
            CREATE TABLE recomendaciones(
                id int unsigned primary key auto_increment,
                titulo varchar(50) not null,
                tipo enum('gastronómico', 'museos') NOT NULL,
                foto varchar(100),
                descripcion varchar(280),
                id_usuarios int unsigned not null,
                foreign key(id_usuarios) references usuarios(id),
                created_at datetime default current_timestamp
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
