const crearRecomendacionModel = require('../../models/recomendaciones/crearRecomendacionModel');
const savePhotoUtil = require('../../utils/savePhotoUtil');

//Importamos errores
const { missingFieldsError } = require('../../services/errorService');

const crearRecomendacionController = async (req, res, next) => {
    // Almacenamos haciendo destructuring de los campos
    try {
<<<<<<< HEAD
        const { titulo, tipo, foto, descripcion } = req.body;
=======
        const { titulo, tipo, foto, descripcion, usuarioId } = req.body;
>>>>>>> origin/javi

        if (!titulo || !tipo) {
            missingFieldsError();
        }

<<<<<<< HEAD
        // Variable que almacena imagen
=======
        //Variable que almacena imagen
>>>>>>> origin/javi
        let imgName;

        // Si existe imagen, la guardamos en disco y obtenemos nombre.
        if (req.files?.image) {
            imgName = await savePhotoUtil(req.files.image, 500);
        }

<<<<<<< HEAD
        // Creamos la recomendación en BBDD and obtain its ID
        const recomendacionId = await crearRecomendacionModel(
=======
        // Creamos la recomendacion en BBDD y obtenemos us ID
        const id_recomendacion = await crearRecomendacionModel(
>>>>>>> origin/javi
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
<<<<<<< HEAD
                    id: Number(recomendacionId), // Convert BigInt to number
=======
                    id: id_recomendacion,
>>>>>>> origin/javi
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
