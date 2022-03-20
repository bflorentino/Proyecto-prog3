import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Admin-DeleteBooks/deleteBookServise';

const TableView = ( {Books} ) => {

  return (
    <div className='flex justify-center'>
       <div class="overflow-hidden rounded-lg mt-8">
        <table className='table-auto font-poppins'>
          <thead className='bg-white'>
            <tr>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Imagen</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Titulo</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Género</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Autor</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Año</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Precio</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Editorial</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase text-sm'>Paginas</th>
              <th scope="col" class="relative py-3 px-6">
                  <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="relative py-3 px-6">
                  <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Books.map(book => (book.enVenta) && (
                <tr className='border-b'>
                  <td className='whitespace-nowrap'>
                    <img src={book.rutaFoto &&  book.rutaFoto.replace(" ", "") }  alt="libro" className='w-15 h-20 ml-6 mr-6 mb-2 mt-2' /></td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs'>{book.nombre}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs'>{book.categoria}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs'>{book.autor}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs'>{book.anio}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs text-center'>{`${book.precio} USD$`}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs '>{book.editorial}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-xs text-center'>{book.numeroPaginas}</td>
                  <td class="py-4 px-2 text-sm font-medium text-right whitespace-nowrap">
                    <Link to={`/Edit-BooksAdm/${book.idlibro}`} class="text-link-blue hover:underline">Editar</Link>
                  </td>
                  <td class="py-4 px-2 text-sm font-medium text-right whitespace-nowrap">
                    <button onClick={() => {deleteBook(book.idlibro)}} className="text-link-blue hover:underline">Eliminar</button>
                  </td>
                </tr>
            ))
            }
          </tbody>
        </table>
         
        </div>

    </div>
  )
}

export default TableView