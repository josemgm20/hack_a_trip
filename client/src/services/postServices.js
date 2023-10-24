//importamos el token
import { getToken } from "../utils/getToken";

//Importamos la url
const baseURL = import.meta.env.VITE_API_URL;

// Registrar usuario
export const crearPostService = async (formData) => {
  const token = getToken();
  const res = await fetch(`${baseURL}/recomendacion`, {
    method: "post",
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  const body = await res.json();

  return body;
};
