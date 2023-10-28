const mariadb = require('mariadb/promise');

<<<<<<< HEAD
const { mariadb_HOST, mariadb_USER, mariadb_PASSWORD, mariadb_DATABASE } = process.env;
=======
const { mariadb_HOST, mariadb_USER, mariadb_PASSWORD, mariadb_DATABASE } =
    process.env;
>>>>>>> origin/javi

let pool;

const getConnection = async () => {
    if (!pool) {
        pool = mariadb.createPool({
            connectionLimit: 10,
            host: mariadb_HOST,
            user: mariadb_USER,
            password: mariadb_PASSWORD,
            database: mariadb_DATABASE,
            timezone: 'Z',
        });
    }

    return await pool.getConnection();
};

module.exports = {
    getConnection,
};
