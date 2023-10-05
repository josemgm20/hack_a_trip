const express = require('express');
const router = express.Router();

//Importamos las funciones controladoras finales
const { insertUserController, loginUsersController} = require('../controllers/users');

// Registro de usuario
router.post('/users/register', insertUserController);

//Login de usuario
router.post('/users/login', loginUsersController);

module.exports = router;