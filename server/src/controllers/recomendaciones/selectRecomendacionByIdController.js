// selectRecomendacionByIdController
// Import your model function
const { selectAllRecomendacionModel } = require('../../models/recomendaciones/index');

// Define the controller function to get a single recommendation by ID
const selectRecomendacionByIdController = async (req, res, next) => {
    try {
        // Extract the recommendation ID from the request query parameters
        const { id } = req.query;

        // Validate if the ID is provided and is a valid number
        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ status: 'error', message: 'Invalid recommendation ID' });
        }

        // Call the model function to retrieve the recommendation by its ID
        const recomendaciones = await selectAllRecomendacionModel('', req.recomendacion?.id);

        // Find the recommendation with the provided ID
        const singleRecomendacion = recomendaciones.find((recomendacion) => recomendacion.id === Number(id));

        // Check if a recommendation with the specified ID was found
        if (singleRecomendacion) {
            res.json({ status: 'ok', data: singleRecomendacion });
        } else {
            res.status(404).json({ status: 'error', message: 'Recomendacion not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Export the controller function
module.exports = selectRecomendacionByIdController;
