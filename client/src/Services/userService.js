// Importa el puerto del servidor Node
import config from '../Utls/config';

// Función para registrar un usuario
export const Register = async (username, password, email) => {
    const userData = { username, password, email };
    const response = await fetch(`${config.serverUrl}:${config.serverPort}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        return true; // Registro exitoso
    } else {
        const errorData = await response.json();
        throw new Error(`Registro fallido: ${errorData.message}`);
    }
};

// Función para iniciar sesión
export const SignIn = async (email, password) => {
    const userData = { email, password };
    const response = await fetch(`${config.serverUrl}:${config.serverPort}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        // Autenticación exitosa, obtén el token del servidor
        const responseData = await response.json();
        const userToken = responseData.token;
        console.log('Token de usuario:', userToken);

        // Almacena el token en el localStorage
        localStorage.setItem('userToken', userToken);

        return true; // Inicio de sesión exitoso
    } else {
        const errorData = await response.json();
        throw new Error(`Inicio de sesión fallido: ${errorData.message}`);
    }
};

// Función para obtener datos de usuario
export const fetchUser = async (token) => {
    const response = await fetch(`${config.serverUrl}:${config.serverPort}/users`, {
        method: 'GET',
        headers: {
            Authorization: `jwt ${token}`,
        },
    });

    if (response.ok) {
        return await response.json();
    } else {
        const errorData = await response.json();
        throw new Error(`Error al obtener datos del usuario: ${errorData.message}`);

    }
};
