const crearRecomendacionModel = require('../../models/recomendaciones/crearRecomendacionModel');
const savePhotoUtil = require('../../utils/savePhotoUtil');
const validateSchema = require('../../utils/validateSchema');

const newRecomendacionSchema = require('../../schemas/recomendaciones/newRecomendacionSchema')

//Importamos errores


const crearRecomendacionController = async (req, res, next) => {
    // Almacenamos haciendo destructuring de los campos
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const { titulo, tipo, foto, descripcion } = req.body;
=======
        const { titulo, tipo, foto, descripcion, usuarioId } = req.body;
>>>>>>> origin/javi
=======
        const { titulo, tipo, descripcion } = req.body;
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f

        await validateSchema(newRecomendacionSchema, {
            ...req.body,
            ...req.files,
        });

<<<<<<< HEAD
        // Variable que almacena imagen
=======
        //Variable que almacena imagen
>>>>>>> origin/javi
        let imgName;

        // Si existe imagen, la guardamos en disco y obtenemos nombre.
        if (req.files?.foto) {
            imgName = await savePhotoUtil(req.files.foto, 500);
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
                    foto: imgName || null,
                    descripcion,
                    createAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = crearRecomendacionController;
