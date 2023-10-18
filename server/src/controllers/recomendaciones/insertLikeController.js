// Importamos modelos

const insertLikeModel = require('../../models/recomendaciones/insertLikeModel');

// Importamos errores

//Funcion controladora que inserta un like
const insertLikeController = async (req, res, next) => {
    try {
        // obtenemos el ide de la recomendacion.
        const { recomendacion } = req.params;

        await insertLikeModel(recomendacion, req.user.id);


        res.sent({
            status: 'ok',
            message: 'Like agregado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = insertLikeController;
