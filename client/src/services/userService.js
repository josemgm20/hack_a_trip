<<<<<<< HEAD
// Importamos la función que retorna el token.
import { getToken } from '../utls/getToken';

// URL base del API.
const baseURL = import.meta.env.VITE_API_URL;

// Registro de usuario.
export const signUpService = async (username, email, password) => {
    const res = await fetch(`${baseURL}/users/register`, {
=======
// Importamos la función que retorna el token
import { getToken } from '../utils/getToken';

// URL base del API
const baseURL= import.meta.env.VITE_API_URL; // Método de import básico de la API con VITE.


// Registro de usuario.
export const signUpService = async (username, email, password) => {
    const res = await fetch(`${baseURL}/users/register`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
>>>>>>> origin/javi
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
<<<<<<< HEAD
    });
=======
    }); 
>>>>>>> origin/javi

    const body = await res.json();

    return body;
};

<<<<<<< HEAD
// Login de usuario.
export const signInService = async (email, password) => {
    const res = await fetch(`${baseURL}/users/login`, {
=======


// Login de usuario.
export const signInService = async (username, password) => { // Modificar datos conforme a lo realizado y requerido en el server y POSTMAN
    const res = await fetch(`${baseURL}/users/login`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
>>>>>>> origin/javi
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
<<<<<<< HEAD
            email,
            password,
        }),
    });
=======
            username,
            password,
        }),
    }); 
>>>>>>> origin/javi

    const body = await res.json();

    return body;
};

<<<<<<< HEAD
// Obtener el perfil privado de un usuario.
export const getPrivateProfileService = async () => {
    const token = getToken();

    const res = await fetch(`${baseURL}/users`, {
        headers: {
            Authorization: token,
        },
    });

=======

// Obtener el perfil privado de un usuario.(También funciona para casos en los que se busque a un usuario para su consiguiente baneo de la página.)
export const getPrivateProfileService = async () => { 
    const token = getToken()

    const res = await fetch(`${baseURL}/users`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        headers: {
            Authorization: token,
        },
    }); 
        
>>>>>>> origin/javi
    const body = await res.json();

    return body;
};
