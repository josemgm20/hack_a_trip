// Importamos la función que retorna el token
import { getToken } from '../utils/getToken';

// URL base del API
const baseURL= import.meta.env.VITE_API_URL; // Método de import básico de la API con VITE.


// Registro de usuario.
export const signUpService = async (username, email, password) => {
    const res = await fetch(`${baseURL}/users/register`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
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



// Login de usuario.
export const signInService = async (username, password) => { // Modificar datos conforme a lo realizado y requerido en el server y POSTMAN
    const res = await fetch(`${baseURL}/users/login`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }); 

    const body = await res.json();

    return body;
};


// Obtener el perfil privado de un usuario.(También funciona para casos en los que se busque a un usuario para su consiguiente baneo de la página.)
export const getPrivateProfileService = async () => { 
    const token = getToken()

    const res = await fetch(`${baseURL}/users`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        headers: {
            Authorization: token,
        },
    }); 
        
    const body = await res.json();

    return body;
};
