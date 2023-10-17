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
} = require('../controllers/recomendaciones');

//Insertar una recomendacion
router.post(
    '/recomendaciones/:usuarioId/crearpost',
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
router.get('/recomendaciones', listRecomendacionController);

// Eliminar una recomendacion
router.delete(
    '/recomendaciones/:recomendacionId',
    authUserController,
    recomendacionExistController,
    deleteLikeController
);

module.exports = router;
