const express = require('express');
const router = express.Router();

// Importamos las funciones controladoras intermedias
const authUserController = require('../middlewares/authUserController');

//Importamos las funciones controladoras finales
const {
    insertUserController,
    loginUsersController,
<<<<<<< HEAD
    getAllUserController,
=======
>>>>>>> origin/javi
    getUserController,
    editAvatarController,
} = require('../controllers/users');

// Registro de usuario
router.post('/users/register', insertUserController);

// Editar avatar
router.put('/user', authUserController, editAvatarController)

//Login de usuario
router.post('/users/login', loginUsersController);

<<<<<<< HEAD
router.get('/users', getAllUserController);

//Informacion del propio usuario.
router.get('/user', authUserController, getUserController);
=======
//Informacion del propio usuario.
router.get('/users', authUserController, getUserController);
>>>>>>> origin/javi




module.exports = router;
