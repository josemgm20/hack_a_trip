<<<<<<< HEAD
const { selectUserByIdModel } = require('../../models/users');

// Controlador para obtener un usuario por su ID
const getUserController = async (req, res, next) => {
    try {
        // Obtener el usuario por su ID
=======
// Importamos modelos.
const { selectUserByIdModel } = require('../../models/users');

const getUserController = async (req, res, next) => {
    try {
>>>>>>> origin/javi
        const user = await selectUserByIdModel(req.user.id);

        res.send({
            status: 'ok',
<<<<<<< HEAD
            data: user


=======
            data: {
                user,
            },
>>>>>>> origin/javi
        });
    } catch (err) {
        next(err);
    }
};
<<<<<<< HEAD

=======
>>>>>>> origin/javi
module.exports = getUserController;
