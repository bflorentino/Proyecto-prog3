import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const history = useNavigate();
    const API = 'https://localhost:44373/api/Usuario/login'; 
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    const logIn = async (values) => {

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
            setUser(data);
            localStorage.setItem('authTokens', JSON.stringify(data)); 

            if(data.data.idRol === 2){
                history('/Get-BooksAdm', {replace : true})
            }else{
                history('/BooksSell', {replace : true})
            }
        }else{
            alert(mensaje);
        }
    }

    const logOut = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        history('/', {replace: true});    
    }

    const contextData = {
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