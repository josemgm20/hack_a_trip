// Importamos Prop-types
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Importamos constantes
import {TOKEN_LOCAL_STORAGE_KEY} from '../utils/constants'

// Importamos el creador de contexto
import { createContext } from 'react';

// Importamos Servicios
import { getPrivateProfileService } from '../services/userService';
import { getToken } from '../utils/getToken';

// Creamos el contexto de autentificacion.
export const AuthContext = createContext(null);

//Creamos el componente provider del contexto.
export const AuthProvider = ({children}) =>{
    const [authUser, setAuthUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        // Constante que retorne los datos del usuario.
        const fetchUser = async () => {
            try {
                setLoading(true);

                const body = await getPrivateProfileService();

                setAuthUser(body.data.user);
            } catch (err) {
                alert(err.message);
            }finally{
                setLoading(false);
            }
        };

        //Obtenemos el token
        const token = getToken();

        // Si existe lo solicitamos
        if(token) fetchUser();
    }, [isAuthenticated]);
}