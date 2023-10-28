// Importamos modelos

const { deleteRecomendacionModel } = require('../../models/recomendaciones/index');

// Importamos errores

//Funcion controladora que elimina un like
const deleteRecomendacionController = async (req, res, next) => {
    try {
        const { recomendacionId } = req.params;
        await deleteRecomendacionModel(recomendacionId, req.user.id);

<<<<<<< HEAD
<<<<<<< HEAD
        await deleteRecomendacionModel(recomendacion, req.user.id);

=======
        await deleteRecomendacionModel(recomendacionId, req.user.id);
>>>>>>> origin/javi

        res.sent({
=======
        res.send({
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
            status: 'ok',
            message: 'Recomendacion eliminada',
        });
    } catch (err) {
        if (err.message === 'Recomendacion not found') {
            // Handle the "Recomendacion not found" error here
            res.status(404).json({
                status: 'error',
                message: 'Recomendacion not found',
            });
        } else {
            // Handle other errors
            next(err);
        }
    }
};


module.exports = deleteRecomendacionController;
