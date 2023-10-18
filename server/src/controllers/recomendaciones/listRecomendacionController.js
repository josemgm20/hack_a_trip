// Importamos modelos
const selectAllRecomendacionModel = require('../../models/recomendaciones/selectAllRecomendacionesModel');

// Funcion controladora que lista recomendaciones
const listRecomendacionController = async (req, res, next) => {
    try {
        // Obtenemos las recomendaciones utilizando el modelo
        const recomendaciones = await selectAllRecomendacionModel();

        res.status(200).json({
            status: 'ok',
            data: {
                recomendacion: recomendaciones
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listRecomendacionController;
