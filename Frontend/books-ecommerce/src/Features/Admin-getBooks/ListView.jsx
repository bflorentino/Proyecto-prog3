import React from 'react'
import BookGrid from './BookGrid'

const ListView = ({Books}) => {

  return (
    <>
        {
            Books.map(book => 
              (book.enVenta) &&
                <BookGrid 
                    key = {book.idlibro}
                    book = {book}
                />
            )
          }
    </>
  )
}

export default ListView