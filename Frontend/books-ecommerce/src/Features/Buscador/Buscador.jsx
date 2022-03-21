import {React, useEffect, useState} from "react";
import { BusquedaService } from "./BusquedaService";

export const Buscador = () => {
    
    const [libros, setLibros] = useState([]);
    const [tablaLibros, setTablaLibros] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrarBusqueda("Busqueda:" + e.target.value);
    }

    const filtrarBusqueda = (libro) => {
        var resultadoBusqueda =  tablaLibros.filter((elemento) => {
            if(elemento.nombre.toString().toLowerCase().includes(libro.toLowerCase())){
                return elemento;
            }
        });
        setLibros(resultadoBusqueda);
    }

    useEffect(() => {
        BusquedaService("Romeo y Julieta").then(info => {
            console.log(info.data);
            setLibros(info.data);
            setTablaLibros(info.data);
        });
    }, [])

    console.log(busqueda);

    return(
        <div className="main">

            <div className="Buscador">
                <input 
                    type="text"
                    value={busqueda}
                    placeholder="Buscar Libro"
                    onChange={handleChange}
                />
            </div>

            <div className="container">
                {libros && libros.map((libro) => (
                    <div key={libro.idlibro}>
                        <h1>Titulo: {libro.nombre}</h1>
                        <p>Precio: {libro.precio}</p>
                        <p>Autor: {libro.autor}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}