import React from "react";
import { AgregarLibrosModal } from "../Preguntas/AgregarLibrosModal";
import { ComprarLibroModal } from "../Preguntas/ComprarLibroModal";
import { DevolucionesModal } from "../Preguntas/DevolucionesModal";
import { HistorialModal } from "../Preguntas/HistorialModal";
import { TiempoEnvio } from "../Preguntas/TiempoEnvio";

export const Footer = () => {

    return(
        <footer className="bg-footer">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">

                <div className="w-full md:flex md:flex-column">
                    <input 
                        type="text" 
                        placeholder="Contactanos" 
                        className="w-full md:w-3/4 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button 
                        className="bg-blue-footer hover:dark-blue-300 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full"
                    >
                        Enviar
                    </button>
                </div>
                <div className="w-full flex flex-column md:justify-end sm:mt-10">
                    <div className="text-white">
                        <h1 className="text-blue-footer text-lg mb-3">Preguntas mas frecuentes</h1> 
                        <ul>
                            <li>
                                <p className="cursor-pointer" onClick={() => ComprarLibroModal()}>1. ¿Como puedo comprar un libro?</p>
                            </li>
                            <li>
                                <p className="cursor-pointer" onClick={() => HistorialModal()}>2. ¿Como puedo ver mi historial de compras?</p>
                            </li>
                            <li>
                                <p className="cursor-pointer" onClick={() => DevolucionesModal()}>3. ¿En que caso se aplican devoluciones?</p>
                            </li>
                            <li>
                                <p className="cursor-pointer" onClick={() => AgregarLibrosModal()}>4. ¿Con que frecuencia agregan nuevos libros a la tienda?</p>
                            </li>
                            <li>
                                <p className="cursor-pointer" onClick={() => TiempoEnvio()}>5. ¿Qué tiempo tarda el envio de libros?</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}