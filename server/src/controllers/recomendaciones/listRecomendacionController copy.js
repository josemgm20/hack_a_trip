// Importa tu función de modelo
const { selectAllRecomendacionModel } = require('../../models/recomendaciones/index');

// Define la función controladora
const listRecomendacionController = async (req, res, next) => {
    try {
        // Obtén el parámetro de consulta
        const { keyword } = req.query;

        // Obtiene recomendaciones utilizando la función del modelo
        const recomendaciones = await selectAllRecomendacionModel(keyword, req.recomendacion?.id);

        // Convierte los valores BigInt a cadenas dentro de cada objeto
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

// Exporta la función controladora
module.exports = listRecomendacionController;
