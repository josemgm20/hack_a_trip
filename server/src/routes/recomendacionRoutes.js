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
=======
>>>>>>> origin/javi
} = require('../controllers/recomendaciones');

//Insertar una recomendacion
router.post(
<<<<<<< HEAD
    '/:usuarioId/recomendaciones',
=======
    '/recomendaciones/:usuarioId/crearpost',
>>>>>>> origin/javi
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
router.get('/recomendaciones?', listRecomendacionController);
=======
router.get('/recomendaciones', listRecomendacionController);
>>>>>>> origin/javi

// Eliminar una recomendacion
router.delete(
    '/recomendaciones/:recomendacionId',
    authUserController,
    recomendacionExistController,
<<<<<<< HEAD
    deleteRecomendacionController
=======
    deleteLikeController
>>>>>>> origin/javi
);

module.exports = router;
