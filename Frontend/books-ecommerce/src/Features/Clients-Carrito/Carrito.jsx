import React from "react";

export const Carrito = ({book}) => {
    
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
					<p className="h-20 ml-2">${book.precio}</p>
				</div>
			</div>
		</div>
	);
}
