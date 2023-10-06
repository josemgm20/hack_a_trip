const { crearRecomendacionModel } = require('../../models/recomendaciones');

//Importamos errores
const { missingFieldsError } = require('../../services/errorService');

const crearRecomendacionController = async (req, res, next) => {
    // Almacenamos haciendo desestructuring de los campos
    try {
        const { titulo, tipo, foto, descripcion, id_usuario } = req.body;
        if (!titulo || !tipo) {
            missingFieldsError();
        }

        //Variable que almacena imagen
        let imgName;

        // Si existe imagen, la guardamos en disco y obtenemos nombre.
        if (foto) {
            imgName = await savePhoto(req.files.image, 500);
        }
    } catch (err) {
        next(err);
    }
};
