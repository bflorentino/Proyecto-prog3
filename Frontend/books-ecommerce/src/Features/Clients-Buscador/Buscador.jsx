import {React, useState} from "react";
import { BusquedaService } from "./BusquedaService";

export const Buscador = () => {
    
    const [libros, setLibros] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {

        setBusqueda(e.target.value);

        BusquedaService(busqueda).then(info => {
            setLibros(info.data);
        });

    }

    return(
        <div className="main ml-5">

            <div className="Buscador">
                <input 
                    className="outline-none p-1 pr-10 rounded-md"
                    type="text"
                    value={busqueda}
                    placeholder="Buscar Libro"
                    onChange={handleChange}
                />
            </div>

            <ul id="lista" className="container absolute mt-5 w-2/6 bg-white rounded-md">
                {libros && libros.map((libro) => (
                    <li key={libro.idlibro} className="p-2 cursor-pointer">
                        <h1>{libro.nombre}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
}