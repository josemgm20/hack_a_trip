const selectAllUserModel = require('../../models/users/selectAllUserModel.js');
const getAllUserController = async (req, res, next) => {
    console.log("Hola")
  try {
    const user = await selectAllUserModel();

    res.send({
        status: 'ok',
        data: {
            user,
        },
    })
  } catch (error) {
    console.error (error)
  }
};

module.exports = getAllUserController;