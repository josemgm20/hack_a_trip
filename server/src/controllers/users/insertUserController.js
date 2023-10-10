//Aquí importamos la función insertUserModel para poder trabajar con ella en el controlador
const insertUserModel = require('../../models/users/insertUserModel');

// Importamos el esquema de Joi
const insertUserSchema = require('../../schemas/users/insertUserSchema');
//Importamos los errores.
const { missingFieldsError } = require('../../services/errorService');

// Creamos la función controlador que se encarga de gestionar el núcleo de la función
const insertUserController = async (req, res, next) => {
    // Almacenamos en tres variables haciendo desestructuring los campos que nos vienen del body en el postman o desde una web
    try {
        const { username, email, password } = req.body;

        // Validamos los datos con Joi
        if (!username || !email || !password) {
            missingFieldsError();
        }

        //insertamos el usuario
        await insertUserModel(username, email, password);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = insertUserController;
