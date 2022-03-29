import React from "react";

export const Carrito = ({book}) => {
    
    return (
		<div className="OrderItem pb-3 mr-20 text-white">
			<div className="content flex flex-column">
				<figure>
					<img 
						src = {book.rutaFoto && book.rutaFoto.replace(" ", "")} 
						alt={`${book.nombre}`} 
						className="w-10 h-20 ml-4 object-cover"
					/>
				</figure>
				<div className="flex flex-column ml-4 mr-6">
					<p className="h-20">{book.nombre}</p>
					<p className="h-20 ml-2">${book.precio}</p>
				</div>
			</div>
		</div>
	);
}