import React from 'react'
import BookStartRating from '../Rate-Books/BookStartRating'

const BookGrid = ({Book}) => {

  return (
      <>
      <div className='flex-flex-col mt-8 ml-8 font-galdeano w-56 hover:cursor-pointer h-96 border border-border-book rounded-lg mb-1'>
        <div className='flex justify-center mt-4'>
          <img 
              src = {`${Book.rutaFoto && Book.rutaFoto.replace(" ", "")}`}  
              alt="nombre" 
              className='w-40 h-60 self-center'    
          />
        </div>
        <div className='ml-8 mt-2 mb-2'>
          <BookStartRating />
        </div>
        <span className='text-sm w-full text-center'> <p>{Book.nombre}</p> </span>
        <span className='text-center w-full text-lg font-bold'> <p>{`US $${Book.precio}`}</p> </span>
      </div>
      </>
  )
}

export default BookGrid