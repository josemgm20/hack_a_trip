// Importamos modelos

const deleteLikeModel = require('../../models/recomendaciones/deleteLikeModel');

// Importamos errores

//Funcion controladora que elimina un like
const deleteLikeController = async (req, res, next) => {
    try {
        // obtenemos el ide de la recomendacion.
        const { recomendacion } = req.params;

        await deleteLikeModel(recomendacionId, req.user.id);

        res.sent({
            status: 'ok',
            message: 'Like eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteLikeController;