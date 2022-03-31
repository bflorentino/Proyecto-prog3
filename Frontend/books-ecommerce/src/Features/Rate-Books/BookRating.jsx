import React from 'react'
import { FaStar } from 'react-icons/fa'
 
const BookRating = ( { book, size } ) => {
 
    return (
        <>
            <div className='flex flex-row'>
                {[...Array(5)].map((star, i) => {
                    
                    const ratingValue = i + 1;
                return <label key={i}>
                    <input 
                        type="radio" 
                        className='hidden' 
                        name='rating' 
                        value={ratingValue} 
                    />
                    <FaStar  
                        color = { ratingValue <= book.promedioCalificacion ? "#ffc107" : "#e4e5e9" } 
                        size={size}
                     />
                    </label> 
                })} 
                <p className='ml-2'>({book.cantidadCalificado})</p>
            </div>
        </>
  )
}

export default BookRating