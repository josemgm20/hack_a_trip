const crearRecomendacionModel = require('../../models/recomendaciones/crearRecomendacionModel');
const savePhotoUtil = require('../../utils/savePhotoUtil');

//Importamos errores
const { missingFieldsError } = require('../../services/errorService');

const crearRecomendacionController = async (req, res, next) => {
    // Almacenamos haciendo desestructuring de los campos
    try {
        const { titulo, tipo, foto, descripcion, usuarioId } = req.body;
        if (!titulo || !tipo) {
            missingFieldsError();
        }

        //Variable que almacena imagen
        let imgName;

        // Si existe imagen, la guardamos en disco y obtenemos nombre.
        if (req.files?.image) {
            imgName = await savePhotoUtil(req.files.image, 500);
        }

        // Creamos la recomendacion en BBDD y obtenemos us ID
        const id_recomendacion = await crearRecomendacionModel(
            titulo,
            tipo,
            imgName,
            descripcion,
            req.user.id
        );

        res.send({
            status: 'ok',
            data: {
                recomendacion: {
                    id: id_recomendacion,
                    usuarioId: req.user.id,
                    titulo,
                    tipo,
                    foto,
                    createAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = crearRecomendacionController;
