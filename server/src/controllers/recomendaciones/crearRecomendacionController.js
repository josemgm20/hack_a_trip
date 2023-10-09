const { crearRecomendacionModel } = require('../../models/recomendaciones');

//Importamos errores
const { missingFieldsError } = require('../../services/errorService');

const crearRecomendacionController = async (req, res, next) => {
    // Almacenamos haciendo desestructuring de los campos
    try {
        const { titulo, tipo, foto, descripcion } = req.body;
        if (!titulo || !tipo) {
            missingFieldsError();
        }
    } catch (err) {
        next(err);
    }
};
