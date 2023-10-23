//importamos el token
import { getToken } from "../utils/getToken";

//Importamos la url
const baseURL = import.meta.env.VITE_API_URL;

// Registrar usuario
export const singUpService = async (username, email, password) => {
  const res = await fetch(`${baseURL}/user/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
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

// Login de usuario
export const singInService = async (username, email, password) => {
  const res = await fetch(`${baseURL}/user/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
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

// Obtener el perfil privado de un usuario.
export const getPrivateProfileService = async () => {
  const token = getToken();

  const res = await fetch(`${baseURL}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  return body;
};
