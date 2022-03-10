import React from 'react'
import BookGrid from './BookGrid'

const ListView = ({Books}) => {

  return (
    <>
        {
            Books.map(book => (
                <BookGrid 
                    key = {book.idLibro}
                    book = {book}
                />
            ))
        } 
    </>
  )
}

export default ListView