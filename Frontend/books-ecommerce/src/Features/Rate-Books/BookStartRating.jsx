import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
 
const BookStartRating = () => {
 
    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);

    const handleRating = ( e ) => {
        setRating(e.target.value)
    }

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
                        onClick={handleRating} 
                    />
                    <FaStar 
                        className='cursor-pointer' 
                        color = { ratingValue <= (hover || rating ) ? "#ffc107" : "#e4e5e9" } 
                        size={17}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                     />
                    </label> 
                })} 
                <p className='ml-2'>(20)</p>
            </div>
        </>
  )
}

export default BookStartRating