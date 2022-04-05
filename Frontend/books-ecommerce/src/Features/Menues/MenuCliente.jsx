import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Buscador } from "../Clients-Buscador/Buscador";
import { Carrito } from "../Clients-Carrito/Carrito";
import { Link } from "react-router-dom";

export const MenuCliente = () => {

    let {logOut, user, state} = useContext(AuthContext);
    
    var showBuscador = "hidden";
    var showCarrito = "hidden"; 

    const Menu = () => {
        let list = document.querySelector('ul');
        let show = document.querySelector('ion-icon');
        
        return show.name === "menu" ? (show.name = "close", list.classList.add('top-[80px]'),  list.classList.add('opacity-100'), list.classList.remove('absolute')) : (show.name = "menu", list.classList.remove('top-[80px]'),  list.classList.remove('opacity-100'), list.classList.add('absolute'));
    };

    const ShowBuscador = () => {
        let list = document.getElementById('lista');

        if (showBuscador === "hidden"){
            list.classList.remove("hidden");
            showBuscador = "show";
        }else{
            list.classList.add("hidden");
            showBuscador = "hidden";
        } 
    }

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

    return(
        <nav className="p-5 bg-blue-menu shadow md:flex md:items-center md:justify-between w-full sticky">
            <div className="flex justify-between items-center">
                <span className="text-2x1 font-[Poppins] cursor-pointer text-white">
                    NOMBRE PAGINA
                </span>
                <span className="text-3x1 cursor-pointer mx-2 md:hidden block">
                    <ion-icon name="menu" onClick={() => Menu()}></ion-icon>
                </span>
            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <li id="lista" className="ml-4 md:my-0 hidden">
                   {<Buscador/>}
                </li>
                <li onClick={() => ShowBuscador()} className="mx-4 md:my-0 text-xl cursor-pointer text-white">
                    <ion-icon name="search-outline"></ion-icon>
                </li>
                <li id="carrito" className="hidden absolute bg-white overflow-y-auto top-16 mt-2 shadow-xl rounded-2xl h-96 w-80">
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
                <li className="mx-4 my-6 md:my-0">
                    {user ? <button className="text-x1 duration-500 cursor-pointer text-white" onClick={logOut}>CERRAR SESIÓN</button> : <Link className="text-x1 text-white hover:text-light-blue-500 duration-500" to="/Login">ACCEDER</Link>}
                </li>
            </ul>
        </nav> 
    )
}