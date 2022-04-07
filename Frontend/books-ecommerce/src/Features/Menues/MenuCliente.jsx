import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Buscador } from "../Clients-Buscador/Buscador";
import { Carrito } from "../Clients-Carrito/Carrito";
import { Link } from "react-router-dom";

export const MenuCliente = () => {

    let {logOut, user, state} = useContext(AuthContext);
    
    var showCarrito = "hidden"; 
    var showInformacionUsuario = "hidden";

    const Menu = () => {
        let list = document.querySelector('ul');
        let show = document.querySelector('ion-icon');
        
        return show.name === "menu" ? (show.name = "close", list.classList.add('top-[80px]'),  list.classList.add('opacity-100'), list.classList.remove('absolute')) : (show.name = "menu", list.classList.remove('top-[80px]'),  list.classList.remove('opacity-100'), list.classList.add('absolute'));
    };

    const ShowCarrito = () => {
        let carrito = document.getElementById('carrito');

        if (showCarrito === "hidden"){
            carrito.classList.remove("hidden");
            showCarrito = "show";
        }else{
            carrito.classList.add("hidden");
            showCarrito = "hidden";
        } 
    }

    const ShowInformacionUsuario = () => {
        let informacionUsuario = document.getElementById('informacion');

        if(showInformacionUsuario === "hidden"){
            informacionUsuario.classList.remove("hidden");
            showInformacionUsuario = "show";
        }else{
            informacionUsuario.classList.add("hidden");
            showInformacionUsuario = "hidden";
        }
    }

    return(
        <nav className="p-2 bg-menu-footer shadow md:flex md:items-center md:justify-between w-full sticky">
            <div className="flex justify-between items-center">
                <span className="font-[Poppins] cursor-pointer text-white">
                <Link to='/'>
                    <img className="h-14 inline cover" src="../assets/Logo.jpeg" alt="Logo"/>
                    VAN GOH LIBRARY
                </Link>
                </span>
                <span className="text-3x1 cursor-pointer mx-2 md:hidden block">
                    <ion-icon name="menu" onClick={() => Menu()}></ion-icon>
                </span>
            </div>

            <div className="flex mr-5 w-2/5 self-center">
                <Buscador/>
                <div className="mx-4 ml-2 mt-1 text-xl cursor-pointer text-white">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 self-center">
                
                <li id="carrito" className="hidden absolute bg-white overflow-y-auto scrol top-16 right-52 mt-2 shadow-xl rounded-2xl h-96 w-80">
                    {state.cart.map(item => (
                        <Carrito book={item} key={`orderId-${item.idLibro}`}/>
                    ))}
                    {state.cart.length > 0 ? <div className="flex w-full justify-center mb-3">
                        <Link to='/cash' className="bg-green p-1 text-white rounded-md bottom-2">
                            PAGAR
                        </Link>
                    </div> : <h1 className="flex text-2xl justify-center items-center h-full w-full">Agrege un libro</h1>}
                </li>
                <li onClick={() => ShowCarrito()} className="flex flex-column ml-4 md:my-0 text-xl cursor-pointer text-white">
                    <ion-icon name="cart-outline"></ion-icon>
                </li>
                <li className="mr-4">
                    {state.cart.length > 0 ? <div className="text-white">{state.cart.length}</div> : null}
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to='/' className="text-x1 duration-500 text-white">LIBROS</Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to='/ShoppingHistory' className="text-x1 duration-500 text-white">HISTORIAL</Link>
                </li>
                <li className="flex cursor-pointer mx-4 md:my-0 text-white" onClick={() => ShowInformacionUsuario()}>
               
                    {
                        user ? 
                            <div className="flex">
                                <h3 className="mb-2 mr-1 mt-1">{user.data.nombreUsuario}</h3>
                                <span className="mt-2">
                                    <ion-icon name="person-outline"></ion-icon>
                                </span>
                            </div>
                        : <Link className="text-x1 mr-6 text-white hover:text-light-blue-500 duration-500" to="/Login">ACCEDER</Link>
                    }
                </li> 
                  
                <li id="informacion" className="hidden absolute bg-white top-16 right-2 mt-2 pb-2 shadow-xl rounded-2xl pt-6 w-56">
                    {
                        user ? 
                                <div className="flex flex-col w-[200px]">
                                    <Link className="ml-5 mb-2  hover:text-link-blue duration-500" to="">CAMBIAR CONTRASEÑA</Link>
                                    <Link className="ml-5 mb-2  hover:text-link-blue duration-500" to="">MANUAL DE USUARIO</Link>
                                    <button className="duration-500 hover:text-link-blue cursor-pointer" onClick={logOut}>CERRAR SESIÓN</button> 
                                </div>

                            : null
                    }
                </li> 
            </ul>
        </nav> 
    )
}