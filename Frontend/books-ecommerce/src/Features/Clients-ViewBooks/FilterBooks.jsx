import React, { useEffect, useState } from 'react'
import { getAllBooks } from '../Admin-getBooks/getBooksService';
import { getBooksFiltered } from './FilterService';

const FilterBooks = ({setBooks}) => {

  const [ filters, setFilters ] = useState({
    genero : [],
    rangoPrecio: 0,
    calificaciones: 0
  });

  const {genero, rangoPrecio, calificaciones} = filters;
  const [ started, setStarted ] = useState(false)

  useEffect(()=> {
    
    if(!started){
      setStarted(true)
    }else if(started && (genero.length !== 0 || rangoPrecio !== 0 || calificaciones !== 0)){
      getBooksFiltered(filters).then(books => {
        setBooks([...books])
      })
    }
    else if(started && genero.length === 0 && rangoPrecio === 0 && calificaciones === 0){
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
            className={`mt-1 ${rangoPrecio === 1 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, rangoPrecio : 1, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$10 US - $20 US </p>
          </label>
        </div>
      
        <div 
            className={`mt-2 ${rangoPrecio === 2 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, rangoPrecio : 2, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$21 US - $40 US </p>
          </label>
        </div>

        <div 
            className={`mt-2 ${rangoPrecio === 3 && 'text-blue-top-buttom'}`}   
            onClick={()=> setFilters({...filters, rangoPrecio : 3, })}
        >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$40 US - $60 US </p>
          </label>
        </div>

        <div 
            className={`mt-2 ${rangoPrecio === 4 && 'text-blue-top-buttom'}`}  
            onClick={()=> setFilters({...filters, rangoPrecio : 4, })}
          >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$60 US - $80 US </p>
          </label>
        </div>

        <div 
           className={`mt-2 ${rangoPrecio === 5 && 'text-blue-top-buttom'}`}   
           onClick={()=> setFilters({...filters, rangoPrecio : 5, })}
          >
          <label htmlFor="price" className='text-sm hover:cursor-pointer'>
            <p>$80 US o más</p>
          </label>
        </div>
      </div>

      <div className='flex flex-col font-poppins mt-6 w-full'>
      <h1 className="text-lg font-bold mb-2 ml-4">Calificaciones</h1>
       
        <div 
            className='mt-2 flex flex-row ml-4 hover:cursor-pointer'
            onClick={()=> setFilters({...filters, calificaciones : 1, })}
          >
          <img 
              src={`../assets/Calificacion1.png`}  
              alt="" 
              className='w-4/10'  
          /> <p className='text-sm'>o más</p> 
        </div>
       
        <div 
            className='mt-2 flex flex-row ml-4 hover:cursor-pointer'
            onClick={()=> setFilters({...filters, calificaciones : 2 })}
          >
          <img 
            src={`../assets/Calificacion2.png`}  
            alt="" 
            className='w-4/10' 
          /> 
          <p className='text-sm'> o más</p>
        </div>

        <div 
            className='mt-2 flex flex-row ml-4 hover:cursor-pointer'
            onClick={()=> setFilters({...filters, calificaciones : 3 })}
        >
          <img 
            src={`../assets/Calificacion 3.png`}  
            alt="" 
            className='w-4/10' 
          /> <p className='text-sm'> o más </p>
        </div>
       
        <div 
            className='mt-2 flex flex-row ml-4 hover:cursor-pointer'
            onClick={()=> setFilters({...filters, calificaciones : 4 })}
          >
          <img 
              src={`../assets/Calificacion 4.png`}  
              alt="" 
              className='w-4/10' 
          /> <p className='text-sm'> o más</p> 
        </div>
    
      </div>
    </>
  );
}

export default FilterBooks;