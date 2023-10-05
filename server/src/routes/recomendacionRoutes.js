const express = require('express');
const router = express.Router();

//Importamos las funciones controladoras finales
const {insertUserController} = require('../controllers/users');

// Registro de usuario

router.post('/', insertUserController)


module.exports = router;