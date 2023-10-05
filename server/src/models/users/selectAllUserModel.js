const getConnection = require ("../../db/getConnection.js")

const selectAllUserModel = async ()=> {
    let connection;

    try {
        connection = await getConnection();

        const users = await connection.query('SELECT * FROM usuarios');

        if (users.length < 1) {
            console.error("Ususarios no encontrados")
        
        }
    

        return users;
    } finally {
        if (connection) connection.release();
    }
};
module.exports = selectAllUserModel;