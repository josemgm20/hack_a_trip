// Importamos modelos
<<<<<<< HEAD
const selectAllRecomendacionModel = require('../../models/recomendaciones/selectAllRecomendacionesModel');

// Funcion controladora que lista recomendaciones
const listRecomendacionController = async (req, res, next) => {
    try {
        // Obtenemos las recomendaciones utilizando el modelo
        const recomendaciones = await selectAllRecomendacionModel();

        res.status(200).json({
            status: 'ok',
            data: {
                recomendaciones
            }
=======

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
>>>>>>> origin/javi
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listRecomendacionController;
