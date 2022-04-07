import React, { useContext, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { AuthContext } from '../Context/AuthContext';
import { rateBook } from './RatingService';
import RatingThanks from './RatingThanks';

const BookStartRating = ({book}) => {
 
    const {user} = useContext(AuthContext);
    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);
    const [ rated, setRated ] = useState(null);
    console.log(book)

    const handleRating = ( e ) => {
        if(!rated){
            setRating(e.target.value)
            rateBook({
                idLibro: book.idlibro,
                calificacion: e.target.value,
                nombreUsuario: user.data.nombreUsuario
            }).then(message=>{
                setRated(true)
            })
        }
    }

    const handleOver = (ratingValue) => {
        if(!rated){
            setHover(ratingValue)
        }
    }
    
    return (
      <>
        <div className="flex flex-row">
          {
            Object.keys(book).length !== 0 &&(
              book.permisoCalificaar === true ? (
              [...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      className="hidden"
                      name="rating"
                      value={ratingValue}
                      onClick={handleRating}
                    />
                    <FaStar
                      className="cursor-pointer mr-12"
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      size={50}
                      onMouseEnter={(e) => handleOver(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })
            ) 
            :(
              <h1>Ya usted ha calificado este libro</h1>
            )   )}
        </div>
          {rated && (
            <RatingThanks />
          )}
      </>
    );
}

export default BookStartRating