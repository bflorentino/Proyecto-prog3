import React from 'react'

const TableView = ( {Books} ) => {

  console.log(Books)
  return (
    <div className='flex justify-center'>
       <div class="overflow-hidden rounded-lg mt-8">
        <table className='table-auto font-poppins'>
          <thead className='bg-white'>
            <tr>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Imagen</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Titulo</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Autor</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Año</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Precio</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Editorial</th>
              <th className='py-3 px-6 tracking-wider text-left uppercase'>Paginas</th>
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
              Books.map(book => (
                <tr className='border-b'>
                  <td className='whitespace-nowrap'>
                    <img src={ `./assets/nombre.jpg` }  alt="libro" className='w-15 h-20 ml-6 mr-6 mb-2 mt-2' /></td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm'>{book.nombre}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm'>{book.autor}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm'>{book.año}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm text-center'>{book.precio}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm '>{book.editorial}</td>
                  <td className='py-4 px-6 whitespace-nowrap text-sm text-center'>{book.numeroPaginas}</td>
                  <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button class="text-link-blue hover:underline">Editar</button>
                  </td>
                  <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button href="#" class="text-link-blue hover:underline">Eliminar</button>
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