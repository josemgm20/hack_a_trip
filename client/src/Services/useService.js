// Importa la configuración del puerto del servidor Node y la función getToken
import config from '../Utls/config';
import { getToken } from '../Utls/getToken';

// Función para registrar un usuario
export const Register = async (username, password, email) => {
    const res = await fetch(`${config.serverUrl}:${config.serverPort}/users/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });

    const body = await res.json();

    return body;
};

// Función para iniciar sesión
export const SignIn = async (email, password) => {
    const res = await fetch(`${config.serverUrl}:${config.serverPort}/users/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const body = await res.json();

    return body;
};

// Función para obtener datos de usuario
export const fetchUser = async () => {
    const token = getToken(); // Recupera el token
    const res = await fetch(`${config.serverUrl}:${config.serverPort}/users/userId`, {
        headers: {
            Authorization: token,
        },
    });

    if (res.status === 200) {
        const user = await res.json();
        return user.data.user;
    } else {
        // Maneja el caso en el que la solicitud no fue exitosa (por ejemplo, no autorizada o usuario no encontrado)
        return null;
    }
};
