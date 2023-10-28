// Importamos modelos

const { insertLikeModel } = require('../../models/recomendaciones/index');

// Importamos errores

//Funcion controladora que inserta un like
const insertLikeController = async (req, res, next) => {
    try {
        // obtenemos el ide de la recomendacion.
        const { recomendacionId } = req.params;

<<<<<<< HEAD
<<<<<<< HEAD
        await insertLikeModel(recomendacion, req.user.id);
=======
        await insertLikeModel(recomendacionId, req.user.id);
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f

=======
        await insertLikeModel(recomendacionId, req.user.id);
>>>>>>> origin/javi

        res.send({
            status: 'ok',
            message: 'Like agregado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = insertLikeController;
