const express = require('express');
const router = express.Router();

//Importamos las funciones controladoras intermedias
const authUserController = require('../middlewares/authUserController');
const recomendacionExistController = require('../middlewares/recomendacionExistsController');

// Importamos las funciones controladoras finales.
const {
    crearRecomendacionController,
    insertLikeController,
    deleteLikeController,
    listRecomendacionController,
<<<<<<< HEAD
    deleteRecomendacionController,
<<<<<<< HEAD
=======
>>>>>>> origin/javi
=======
    //selectRecomendacionByIdController,

>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
} = require('../controllers/recomendaciones');

//Insertar una recomendacion
router.post(
<<<<<<< HEAD
<<<<<<< HEAD
    '/:usuarioId/recomendaciones',
=======
    '/recomendaciones/:usuarioId/crearpost',
>>>>>>> origin/javi
=======
    '/recomendaciones',
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f
    authUserController,
    crearRecomendacionController
);

//Insertar un like
router.post(
    '/recomendaciones/:recomendacionId/likes',
    authUserController,
    recomendacionExistController,
    insertLikeController
);

//Eliminar un like
router.delete(
    '/recomendaciones/:recomendacionId/likes',
    authUserController,
    recomendacionExistController,
    deleteLikeController
);

// Seleccionar todas las recomendaciones
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/recomendaciones?', listRecomendacionController);
=======
router.get('/recomendaciones', listRecomendacionController);
>>>>>>> origin/javi
=======
router.get('/recomendaciones', listRecomendacionController);
//router.get('/recomendaciones/:recomendacionId', selectRecomendacionByIdController);
>>>>>>> d0f8c7e62695313d92eea84f8f6222fce1ce684f

// Eliminar una recomendacion
router.delete(
    '/recomendacion/:recomendacionId',
    authUserController,
    recomendacionExistController,
<<<<<<< HEAD
    deleteRecomendacionController
=======
    deleteLikeController
>>>>>>> origin/javi
);

module.exports = router;
