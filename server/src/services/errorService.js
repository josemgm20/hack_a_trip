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
    deleteFileError() {
        throw {
            httpStatus: 501,
            code: 'FILE_DELETE_FAILED',
            message: 'Error al eliminar el archivo en disco',
        };
    },
    unauthorizedUserError() {
        throw {
            httpStatus: 403,
            code: 'UNAUTHORIZED',
            message: 'El usuario no está autorizado para hacer esta operación',
        };
    },
    notFoundError() {
        throw {
            httpStatus: 404,
            code: 'NOT_FOUND_ERROR',
            message: 'No se ha encontrado',
        };
    },
    notAutheticatedError() {
        throw {
            httpStatus: 405,
            code: 'NOT_AUTHENTICATED_USER',
            message: 'El usuario no está autentificado',
        };
    },
    invalidTokenError() {
        throw {
            httpStatus: 406,
            code: 'INVALID_TOKEN_ERROR',
            message: 'El token es invalido',
        };
    },
    likeAlreadyExistError() {
        throw {
            httpStatus: 406,
            code: 'LIKE_ALREADY_EXIST_ERROR',
            message: 'El like ya existe',
        };
    },
};
