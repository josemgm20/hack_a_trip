import { useState } from 'react'
import authContext from '../context/authContext'
import { userLocalStorageKey } from '../config'

function isEmpty(obj) {
    return Object.keys(obj).length === 0
}

function AuthProvider({ children }) {
    const savedUser = JSON.parse (localStorage.getItem(userLocalStorageKey)) || {} // En el caso de que en el localstorage no hay objetos creados, retorna un objeto vacío
    const [ userData, setUserData ] = useState(savedUser)

    const setUserHandler = (user = {}) => {
        if (isEmpty(user)) return

        localStorage.setItem(userLocalStorageKey, JSON.stringify(user)) // Convierte un objeto a formato JSON para poder guardarlo en el local storage
        setUserData(user)
    }

    const logoutHandler = () => {
        setUserData(null)
    }

    const authValues = {
        user: userData.user ?? null,
        token: userData.token ?? null,
        isAuthenticated: userData.token ?? null,
        setUser: setUserHandler,
        logout: logoutHandler
    }

    return <authContext.Provider value={authValues}>
        { children }
    </authContext.Provider>
}

export default AuthProvider