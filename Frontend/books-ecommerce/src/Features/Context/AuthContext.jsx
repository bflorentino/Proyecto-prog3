import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const history = useNavigate();
    const API = 'https://localhost:44373/api/Usuario/login'; 

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null);

    let logIn = async (values) => {

        let mensaje = 'Usuario no encontrado';

        let response = await fetch(API, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        
        let data = await response.json();
        
        if (response.status === 200){
            setAuthTokens(data);
            setUser(data.exito);

            localStorage.setItem('authTokens', JSON.stringify(data));
            history('/Get-BooksAdm');
        }else{
            alert(mensaje);
        }
    }

    let logOut = () => {
        setAuthTokens(null);
        setUser(null);

        localStorage.removeItem('authTokens');
        history('/Log-in');    
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        logIn:logIn,
        logOut:logOut,
    };

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}