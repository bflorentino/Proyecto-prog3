import React from 'react'

const ItemGrid = ({book}) => {
  return (
    <div className='flex flex-row mt-4'>
        <img 
            src={book.rutaFoto.replace(" ", "")}
            alt=""
            className='w-12 h-20' 
        />
        <p className='ml-4 text-sm font-bold mt-4 w-56'>{book.nombre}({book.cantidad})</p>
        <p className='ml-12 text-base mt-4'>{book.precio}US$</p>
    </div>
  )
}

export default ItemGrid