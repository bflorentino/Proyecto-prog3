import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAlerta } from '../Login/LoginModal';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const history = useNavigate();
    const API = 'https://localhost:44373/api/Usuario/login'; 
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    const initialState = {
        cart: [],
    }

    const [state, setState] = useState(initialState);

    const logIn = async (values) => {

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
                history('/', {replace:true})
            }
        }else{
            loginAlerta();
        }
    }

    const logOut = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        state.cart = []    
        history('/Login', {replace: true});
    }

    const agregarLibroCarrito = (idLibro, cantidad, rutaFoto, nombre, precio) => {
        let libro = {idLibro, cantidad, rutaFoto, nombre, precio}
        setState({
            ...state,
            cart: [...state.cart, libro]
        });
    }

    const eliminarLibroCarrito = (book) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.idLibro != book.idLibro),
        });
    }

    const contextData = {
        user:user,
        authTokens:authTokens,
        state:state,
        logIn:logIn,
        logOut:logOut,
        agregarLibroCarrito:agregarLibroCarrito,
        eliminarLibroCarrito:eliminarLibroCarrito,
    };

    return(
        <AuthContext.Provider value={contextData}>     
            {children}
        </AuthContext.Provider>
    )
}