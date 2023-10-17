import { useState, useEffect } from 'react';
import { Register, SignIn, fetchUser } from '../Services/userService';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

export const useUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Inicializa la función navigate para la navegación

    // Efecto para cargar los datos del usuario al cargar la página
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        console.log('Token almacenado:', token);

        if (token) {
            (async () => {
                try {
                    setLoading(true);
                    const userData = await fetchUser(token);
                    setUser(userData);
                } catch (err) {
                    console.error('Error al obtener datos:', err);
                } finally {
                    setLoading(false);
                }
            })();
        }
    }, []);

    // Función para manejar el registro del usuario
    const handleRegister = async () => {
        try {
            await Register(username, password, email);
        } catch (err) {
            console.error('Error de registro:', err);
        }
    };

    // Función para manejar el inicio de sesión del usuario
    const handleSignIn = async () => {
        try {
            const success = await SignIn(email, password);
            if (success) {
                navigate('/Dashboard'); // Utiliza la función navigate para ir a /Dashboard
            }
        } catch (err) {
            console.error('Error de inicio de sesión:', err);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        user,
        loading,
        handleRegister,
        handleSignIn,
    };
};
