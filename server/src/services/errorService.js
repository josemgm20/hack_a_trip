module.exports = {
    missingFieldsError() {
        throw {
            httpStatus: 400, //Bad request
            code: 'MISSING_FIELDS',
            message: 'Faltan campos',
        };
    },

    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409,
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'El email ya está registrado',
        };
    },

    invalidCredentialsError() {
        throw {
            httpStatus: 401,
            code: 'INVALID_CREDENTIALS',
            message: 'Credenciales inválidas',
        };
    },
    saveFileError() {
        throw {
            httpStatus: 500,
            code: 'FILE_SAVE_FAILED',
            message: 'Error al guardar el archivo en disco',
        };
    },
    unauthorizedUserError() {
        throw {
            httpStatus: 403,
            code: 'UNAUTHORIZED',
            message: 'El usuario no está autorizado para hacer esta operación',
        };
    },
    recomendacionNotFoundError() {
        throw {
            httpStatus: 404,
            code: 'RECOMENDATION_NOT_FOUND',
            message: 'No se ha encontrado la recomendacion',
        };
    },
};
