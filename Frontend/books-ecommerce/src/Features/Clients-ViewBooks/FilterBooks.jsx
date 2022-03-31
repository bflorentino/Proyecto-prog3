import React, { useEffect, useState } from 'react'
import { getAllBooks } from '../Admin-getBooks/getBooksService';
import { getBooksFiltered } from './FilterService';

const FilterBooks = ({setBooks}) => {

  const [ filters, setFilters ] = useState({
    genero : [],
    precio: 0,
    calificacion: 0,
    idioma: 0
  });

  const {genero, precio, calificacion, idioma} = filters;
  const [ started, setStarted ] = useState(false)

  useEffect(()=> {
    
    if(!started){
      setStarted(true)
    }else if(started && (genero.length !== 0 || precio !== 0 || calificacion !== 0 || idioma !== 0)){
      getBooksFiltered(filters).then(books => {
        setBooks([...books])
      })
    }
    else if(started && genero.length === 0 && precio === 0 && calificacion === 0 && idioma === 0){
      getAllBooks().then(books => {
        setBooks([...books])
      })
    }
      // eslint-disable-next-line
    },[filters])
    
  const handleFilterGenres = (e) => {
    e.target.checked 
        ? setFilters({ ...filters, genero: [e.target.value,...genero]})
        : setFilters({...filters, genero: genero.filter(genero => genero !== e.target.value)})
  }

  const handleClearPrice = (e) => {
    setFilters({...filters, precio : 0})
  }

  const handleClearLanguage = (e) => {
    setFilters({...filters, idioma : 0})
  }

  const handleClearRating = (e) => {
    setFilters({...filters, calificacion : 0})
  }

  return (
    <>
    <h1 className='text-center text-2xl font-poppins font-bold mt-2'>Filtrado</h1>

      <div className="flex flex-col ml-4 mt-8 font-poppins">

        <h1 className="text-lg font-bold mb-2">Género</h1>
        <div>
          <input type="checkbox" value={1} id="cbox1" onChange={handleFilterGenres}/>
          <label className="ml-4 text-sm" htmlFor="cbox1">
            Aventura
          </label>
        </div>

        <div>
          <input type="checkbox" value={2} id="cbox2" onChange={handleFilterGenres}/>
          <label className="ml-4 text-sm" htmlFor="cbox2">
            Fantasía
          </label>
        </div>

        <div>
          <input type="checkbox" value={3} id="cbox3" onChange={handleFilterGenres} />
          <label className="ml-4 text-sm" htmlFor="cbox3">
            Ciencia Ficción
          </label>
        </div>

        <div>
          <input type="checkbox" value={4} id="cbox4" onChange={handleFilterGenres} />
          <label className="ml-4 text-sm" htmlFor="cbox4">
            Romance
          </label>
        </div>
      </div>

      <div className='flex flex-col ml-4 font-poppins mt-6'>
      <h1 className="text-lg font-bold mb-2">Precio</h1>
        <div 
            className={`mt-1 ${precio === 1 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, precio : 1, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$10 US - $20 US </p>
          </label>
        </div>
      
        <div 
            className={`mt-2 ${precio === 2 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, precio : 2, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$21 US - $40 US </p>
          </label>
        </div>

        <div 
            className={`mt-2 ${precio === 3 && 'text-blue-top-buttom'}`}   
            onClick={()=> setFilters({...filters, precio : 3, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$40 US - $60 US </p>
          </label>
        </div>

        <div 
            className={`mt-2 ${precio === 4 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, precio : 4, })}
          >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$60 US - $80 US </p>
          </label>
        </div>

        <div 
           className={`mt-2 ${precio === 5 && 'text-blue-top-buttom'}`}   
           onClick={()=> setFilters({...filters, precio : 5, })}
          >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$80 US o más</p>
          </label>
        </div>
      <button onClick={handleClearPrice} className='text-blue-top-buttom text-xs hover:underline mt-2'>Reestablecer</button>
      </div>

      <div className='flex flex-col font-poppins mt-6 w-full'>
      <h1 className="text-lg font-bold mb-2 ml-4">Calificaciones</h1>
        <div 
            className={`mt-2 flex flex-row ml-4 hover:cursor-pointer ${calificacion === 4 && 'text-blue-top-buttom'}`}
            onClick={()=> setFilters({...filters, calificacion : 4, })}
          >
          <img 
              src={`../assets/Calificacion1.png`}  
              alt="" 
              className='w-4/10'  
          /> <p className='text-sm'>o más</p> 
        </div>
       
        <div 
            className={`mt-2 flex flex-row ml-4 hover:cursor-pointer ${calificacion === 3 && 'text-blue-top-buttom'}`}
            onClick={()=> setFilters({...filters, calificacion : 3 })}
          >
          <img 
            src={`../assets/Calificacion2.png`}  
            alt="" 
            className='w-4/10' 
          /> 
          <p className='text-sm'> o más</p>
        </div>

        <div 
           className={`mt-2 flex flex-row ml-4 hover:cursor-pointer ${calificacion === 2 && 'text-blue-top-buttom'}`}
            onClick={()=> setFilters({...filters, calificacion : 2 })}
        >
          <img 
            src={`../assets/Calificacion 3.png`}  
            alt="" 
            className='w-4/10' 
          /> <p className='text-sm'> o más </p>
        </div>
       
        <div 
             className={`mt-2 flex flex-row ml-4 hover:cursor-pointer ${calificacion === 1 && 'text-blue-top-buttom'}`} 
            onClick={()=> setFilters({...filters, calificacion : 1 })}
          >
          <img 
              src={`../assets/Calificacion 4.png`}  
              alt="" 
              className='w-4/10' 
          /> <p className='text-sm'> o más</p> 
        </div>
      <button onClick={handleClearRating} className='text-blue-top-buttom text-xs hover:underline mt-2'>Reestablecer</button>
    
      </div>

      
      <div className='flex flex-col font-poppins mt-6 w-full'>
      <h1 className="text-lg font-bold ml-4">Idioma</h1>
      
        <div 
            className={`mt-2 ml-4 ${idioma === 2 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, idioma: 2, })}
          >
         <p className='text-sm cursor-pointer'>Español</p> 
        </div>
       
        <div 
            className={`mt-2  ml-4 ${idioma === 1 && 'text-blue-top-buttom '}`}  
            onClick={()=> setFilters({...filters,idioma : 1 })}
          >
          <p className='text-sm cursor-pointer'> Inglés</p>
        </div>
      <button onClick={handleClearLanguage} className='text-blue-top-buttom text-xs hover:underline'>Reestablecer</button>
  
      </div>
    </>
  );
}

export default FilterBooks;