import { useState, useEffect } from 'react';
import { Register, SignIn, fetchUser } from '../Services/useService';
import { useNavigate } from 'react-router-dom';

export const useUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');

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

    // Función para manejar el registro de usuario
    const handleRegister = async () => {
        try {
            // Register debería devolver un éxito o datos de usuario, asumiendo que el éxito devuelve un objeto de usuario
            const registeredUser = await Register(username, password, email);

            if (registeredUser) {
                navigate('/registration-success'); // Corregido el error tipográfico, debe ser navigate
            }
        } catch (err) {
            console.error('Error de registro:', err);
        }
    };

    // Función para manejar el inicio de sesión de usuario
    const handleSignIn = async () => {
        try {
            const success = await SignIn(email, password);

            if (success) {
                navigate('/Dashboard'); // Corregido el error tipográfico, debe ser navigate
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
