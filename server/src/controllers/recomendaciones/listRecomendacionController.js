// Importamos modelos

const selectAllRecomendacionModel = require('../../models/recomendaciones/selectAllRecomendacionesModel');

// Importamos errores

//Funcion controladora que elimina un like
const listRecomendacionController = async (req, res, next) => {
    try {
        // obtenemos el query
        const recomendacion = await selectAllRecomendacionModel(req.user?.id);

        res.sent({
            status: 'ok',
            data: {
                recomendacion,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listRecomendacionController;
