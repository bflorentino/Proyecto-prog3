import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";

export const MenuCliente = () => {

    let {logOut, user} = useContext(AuthContext);

    const Menu = () => {
        let list = document.querySelector('ul');
        let show = document.querySelector('ion-icon');
        
        return show.name === "menu" ? (show.name = "close", list.classList.add('top-[80px]'),  list.classList.add('opacity-100'), list.classList.remove('absolute')) : (show.name = "menu", list.classList.remove('top-[80px]'),  list.classList.remove('opacity-100'), list.classList.add('absolute'));
    };

    return(
        <nav className="p-5 bg-blue-menu shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                <span className="text-2x1 font-[Poppins] cursor-pointer text-white">
                    NOMBRE PAGINA
                </span>
                <span className="text-3x1 cursor-pointer mx-2 md:hidden block">
                    <ion-icon name="menu" onClick={() => Menu()}></ion-icon>
                </span>
            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <li className="mx-4 my-6 md:my-0">
                    <a className="text-x1 hover:text-light-blue-500 duration-500 text-white" href="/">ALL BOOKS</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    {user ? <a className="text-x1 hover:text-light-blue-500 duration-500 cursor-pointer text-white" onClick={logOut}>LOGOUT</a> : <a className="text-x1 text-white hover:text-light-blue-500 duration-500" href="/Login">LOGIN</a>}
                </li>
            </ul>
        </nav>
    )
}