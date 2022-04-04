import { React, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Carrito = ({book}) => {

	const {eliminarLibroCarrito} = useContext(AuthContext);

	const handleEliminarLibroCarrito = (bookE) => {
		eliminarLibroCarrito(bookE);
	}
    
    return (
		<div className="OrderItem pb-3 mt-2 w-full">
			<div className="content flex flex-column w-full">
				<figure className="w-1/5">
					<img 
						src = {book.rutaFoto && book.rutaFoto.replace(" ", "")} 
						alt={`${book.nombre}`} 
						className="w-10 h-20 ml-4 object-cover"
					/>
				</figure>
				<div className="flex flex-row ml-4 h-20 mt-6 w-4/5">
					<p className="h-20 w-2/3">{book.nombre}({book.cantidad})</p>
					<p className="h-20 ml-2 mr-5">${book.precio}</p>
					<span className="cursor-pointer" onClick={() => handleEliminarLibroCarrito(book)}><ion-icon name="close-outline"></ion-icon></span>
				</div>
			</div>
		</div>
	);
}
