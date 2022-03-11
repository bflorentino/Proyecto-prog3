import React from 'react'

const BookGrid =( {book} ) => {

  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='flex flex-row mb-6 mt-6 font-poppins w-2/3 border-b pb-6'>
          <img 
              src={ `./assets/nombre.jpg` }  
              className='w-30 h-40 ml-6 mr-6' 
              alt = "nombre"
          />
              <dl className='mt-2 w-1/2'>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Título: </dt>
                  <dd className='ml-2'>{book.nombre}</dd>
                </div>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Autor: </dt>    
                  <dd className='ml-2'>{book.autor}</dd>
                </div>
                
                <div className='flex flex-row'>
                  <dt className = "font-bold">Precio: </dt>               
                  <dd className='ml-2'>{book.precio}</dd>
                </div>
                
                <div className='flex flex-row'>
                  <dt className = "font-bold">Año: </dt>
                  <dd className='ml-2'>{book.año}</dd>
                </div>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Editorial: </dt>
                  <dd className='ml-2'>{book.editorial}</dd>
                </div>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Numero de Paginas:  </dt>
                  <dd className='ml-2'>{book.numeroPaginas}</dd>
                </div>

            </dl>

            <div className='flex items-center'>
              <button className='ml-32 bg-green-button text-white px-4 py-1'>
                  Editar
              </button>
              <button className='ml-4 px-4 py-1 bg-red-error text-white'>
                  Eliminar
              </button>
            </div>
      </div>
    </div>
    </>
  )
}

export default BookGrid