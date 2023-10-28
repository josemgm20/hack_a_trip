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
    deleteRecomendacionController,
    //selectRecomendacionByIdController,

} = require('../controllers/recomendaciones');

//Insertar una recomendacion
router.post(
    '/recomendaciones',
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
//router.get('/recomendaciones/:recomendacionId', selectRecomendacionByIdController);

// Eliminar una recomendacion
router.delete(
    '/recomendacion/:recomendacionId',
    authUserController,
    recomendacionExistController,
    deleteRecomendacionController
);

module.exports = router;
