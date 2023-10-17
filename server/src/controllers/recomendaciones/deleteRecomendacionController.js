// Importamos modelos

const deleteRecomendacionModel = require('../../models/recomendaciones/deleteRecomendacionModel');

// Importamos errores

//Funcion controladora que elimina un like
const deleteRecomendacionController = async (req, res, next) => {
    try {
        // obtenemos el ide de la recomendacion.
        const { recomendacion } = req.params;

        await deleteRecomendacionModel(recomendacionId, req.user.id);

        res.sent({
            status: 'ok',
            message: 'Recomendacion eliminada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteRecomendacionController;
