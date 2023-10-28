<<<<<<< HEAD
// Importamos modelos
<<<<<<< HEAD
const selectAllRecomendacionModel = require('../../models/recomendaciones/selectAllRecomendacionesModel');
=======
// Importamos los modelos.
const { selectAllRecomendacionModel } = require('../../models/recomendaciones/index');
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f

// Función controladora final que selecciona todos los recomendaciones.
const listRecomendaionesController = async (req, res, next) => {
    try {
        const { keyword, searchBy, id, likes } = req.query;

        const recomendaciones = await selectAllRecomendacionModel(keyword, req.user?.id, searchBy, id || likes);

        res.send({
            status: 'ok',
            data: {
<<<<<<< HEAD
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
=======
                recomendaciones,
            },
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
        });
    } catch (err) {
        next(err);
    }
};
module.exports = listRecomendaionesController;
