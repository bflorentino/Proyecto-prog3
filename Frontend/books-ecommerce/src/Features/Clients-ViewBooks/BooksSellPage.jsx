import React, { useEffect, useState } from 'react'
import { getAllBooks } from '../Admin-getBooks/getBooksService'
import BookGrid from './BookGrid';
import FilterBooks from './FilterBooks';
import { MenuCliente } from '../Menues/MenuCliente';

const BooksSellPage = () => {

  const [ books, setBooks ] = useState(null);

  useEffect(() => {
    getAllBooks().then(books => {
      setBooks([...books])
    })
  }, [])

  return (
    <>
      <div className='content'>
        <MenuCliente/>
        <div className='flex flex-row h-full w-full bg-white overflow-auto'>
          <div className='h-full w-1/6 border-r border-border-book mr- overflow-auto'>
            <FilterBooks setBooks={setBooks} />
          </div>
          <div className='flex flex-row flex-wrap w-5/6'>
            {
              books && 
              (<div className='border-b border-t border-border-book w-full ml-2 mr-2 p-2'>
                {books && <p>{`${books.length} resultados` }</p>} 
              </div>)
            }
              { books?
            books.map(book => 
                  (book.enVenta) && 
                  <BookGrid 
                    key = {book.idlibro}
                    Book = {book}
                  /> 
                  )
              : 
                  <h1 className='text-center w-full mt-72 text-3xl font-bold'>Cargando...</h1>
              }
            </div>
        </div>
      </div>
    </>
  )
}
export default BooksSellPage