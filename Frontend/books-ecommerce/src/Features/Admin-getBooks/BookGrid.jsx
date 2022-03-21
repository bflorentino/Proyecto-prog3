import React  from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Admin-DeleteBooks/deleteBookServise';

const BookGrid =( {book} ) => {

  const handlePregunta = () => {
    const overlay = document.querySelector('#overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
  }

  const handleCerrar = () => {
    const overlay = document.querySelector('#overlay');
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
  }

  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='flex flex-row mb-6 mt-6 font-poppins w-2/3 border-b pb-6'>
          <img 
              src={ book.rutaFoto && book.rutaFoto.replace(" ", "") }  
              className='w-30 h-40 ml-6 mr-6' 
              alt = "nombre"
          />
              <dl className='w-1/2'>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Título: </dt>
                  <dd className='ml-2'>{book.nombre}</dd>
                </div>

                
                <div className='flex flex-row'>
                  <dt className = "font-bold">Género: </dt>    
                  <dd className='ml-2'>{book.categoria}</dd>
                </div>

                <div className='flex flex-row'>
                  <dt className = "font-bold">Autor: </dt>    
                  <dd className='ml-2'>{book.autor}</dd>
                </div>
                
                <div className='flex flex-row'>
                  <dt className = "font-bold">Precio: </dt>               
                  <dd className='ml-2'>{`${book.precio} USD$`}</dd>
                </div>
                
                <div className='flex flex-row'>
                  <dt className = "font-bold">Año: </dt>
                  <dd className='ml-2'>{book.anio}</dd>
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
              <Link to={`/Edit-BooksAdm/${book.idlibro}`} className='ml-32 bg-green-button text-white px-4 py-1'>
                  Editar
              </Link>
              <button onClick={() => {handlePregunta()}} className='ml-4 px-4 py-1 bg-red-error text-white'>
                Eliminar 
              </button>
            </div>
      </div>

      <div id="overlay" className="mt-10 hidden bg-white bg-opacity absolute flex-col justify-center items-center py-10 px-10 rounded shadow-xl">
        <h2 className="text-lg font-bold bg-gray-200">¿Seguro de  que quieres eliminar el libro?</h2>
        
        <div className="flex flex-row mt-3">
          <button onClick={() => {deleteBook(book.idlibro)}} className="mx-2 px-3 py-1 bg-red-error text-white rounded hover:bg-opacity-50">Eliminar</button>
          <button onClick={() => {handleCerrar()}} className="mx-2 px-3 py-1 bg-gray text-white rounded hover:bg-opacity-50">Cancelar</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default BookGrid