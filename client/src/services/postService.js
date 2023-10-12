// Importamos la función que retorna el token.

import { getToken } from '../utils/getToken';

// URL base del API.

const baseURL= import.meta.env.VITE_API_URL; // Método de import básico de la API con VITE.

// Crear un post en la página.

export const createPostService = async (formData) => {
    const token = getToken(); // Poner el token antes de cada petición para asegurarnos de su existencia en cada post

    const res = await fetch(`${baseURL}/publicaciones`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        method: 'post',
        headers: {
            Autorization: token,
        },
        body: formData,
    }); 

    const body = await res.json();

    return body;
};

// Listar los posts.

export const listPostService = async (searchParams) => {
    const token = getToken();   // Poner el token antes de cada petición para asegurarnos de su existencia en cada post

    const res = await fetch(`${baseURL}/publicaciones?${searchParams}`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        headers: token ? { Authorization: token } : {}, // Si exsite token manda un token, en caso de que no manda un objeto vacío
    }); 

    const body = await res.json();

    return body;
};

// Valorar un post o eliminar valoración de un post

export const appreciatePostService = async (postId, method) => {
    const token = getToken(); // Poner el token antes de cada petición para asegurarnos de su existencia en cada post

    const res = await fetch(`${baseURL}/publicaciones/${postId}/appreciate`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        method,
        headers: {
            Autorization: token,
        },
    }); 

    const body = await res.json();

    return body;
};

// Eliminar un post.

export const deletePostService = async (postId) => {
    const token = getToken(); // Poner el token antes de cada petición para asegurarnos de su existencia en cada post

    const res = await fetch(`${baseURL}/publicaciones/${postId}`, { // Modificar el fetch conforme esté realizado en el POSTMAN personal, según  tu dirección.
        method: 'delete',
        headers: {
            Autorization: token,
        },
    }); 

    const body = await res.json();

    return body;
};
