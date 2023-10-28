// Import your model function
const { selectAllRecomendacionModel } = require('../../models/recomendaciones/index');

// Define the controller function
const listRecomendacionController = async (req, res, next) => {
    try {
        // Get the query parameter
        const { keyword } = req.query;

        // Fetch recomendaciones using the model function
        const recomendaciones = await selectAllRecomendacionModel(keyword, req.recomendacion?.id);

        // Convert any BigInt values to strings within each object
        const convertedRecomendaciones = recomendaciones.map((recomendacion) => {
            for (const key in recomendacion) {
                if (typeof recomendacion[key] === 'bigint') {
                    recomendacion[key] = recomendacion[key].toString();
                }
            }
            return recomendacion;
        });

        res.send({
            status: 'ok',
            data: {
                recomendaciones: convertedRecomendaciones,
            },
        });
    } catch (err) {
        next(err);
    }
};

// Export the controller function
module.exports = listRecomendacionController;
