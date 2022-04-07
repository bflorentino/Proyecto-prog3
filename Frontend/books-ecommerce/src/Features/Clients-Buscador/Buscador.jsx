import {React, useEffect, useState} from "react";
import { BusquedaService } from "./BusquedaService";
import { Link } from "react-router-dom";

export const Buscador = () => {
    
    const [libros, setLibros] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {
        setBusqueda(e.target.value);
    }

    useEffect(() => {
        let listLibros = document.getElementById('lista');

        BusquedaService(busqueda).then(info => {
            setLibros(info.data);
        });
        
        if(busqueda === ""){
            listLibros.classList.add('hidden');
        }else{
            listLibros.classList.remove('hidden');
        }
    }, [busqueda])

    return(
        <div className="main ml-5 w-full">

            <div className="Buscador w-full">
                <input 
                    className="outline-none p-1 pr-10 rounded-md w-full"
                    type="text"
                    value={busqueda}
                    placeholder="Buscar Libro"
                    onChange={handleChange}
                />
            </div>

            <ul id="lista" className="container absolute mt-5 w-2/6 h-[350px] overflow-auto scrol bg-white">
                {libros && libros.map((libro) => (
                    <Link to={`/Book-Info/${libro.idlibro}`}>
                        <li key={libro.idlibro} className="rounded-bottom hover:bg-beige hover:text-white p-2 cursor-pointer">
                            {libro.nombre}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}