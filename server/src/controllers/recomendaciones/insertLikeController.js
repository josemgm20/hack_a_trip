// Importamos modelos

const { insertLikeModel } = require('../../models/recomendaciones/index');

// Importamos errores

//Funcion controladora que inserta un like
const insertLikeController = async (req, res, next) => {
    try {
        // obtenemos el ide de la recomendacion.
        const { recomendacionId } = req.params;

        await insertLikeModel(recomendacionId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Like agregado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = insertLikeController;
