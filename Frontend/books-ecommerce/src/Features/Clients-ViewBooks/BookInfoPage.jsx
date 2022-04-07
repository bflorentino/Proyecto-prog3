import React, { useContext, useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom'
import { getBookById } from '../Admin-getBooks/getBooksService'
import { MenuCliente } from '../Menues/MenuCliente'
import { AuthContext } from '../Context/AuthContext'
import BookRating from '../Rate-Books/BookRating'
import { Footer } from '../Footer/Footer'
import BookStartRating from '../Rate-Books/BookStartRating'

const BookInfoPage = () => {

  const [ book, setBook ] = useState({})
  const history = useNavigate();
  const { bookId } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const { agregarLibroCarrito, user, state } = useContext( AuthContext );
  const userName = user !== null ? user.data.nombreUsuario : "no"

useEffect(() => {
  getBookById(bookId, userName).then(book =>{
    setBook(book[0])
    // eslint-disable-next-line
  })}, [bookId])
  
  if(user!== null && user.data.idRol === 2){
      return <Navigate to='/Get-BooksAdm' replace />
  }

const handleAgregarLibro = (idLibro, cantidad, rutaFoto, nombre, precio) => {
  if(!user){
      history('/login')
    }else{
      agregarLibroCarrito(idLibro, cantidad, rutaFoto, nombre, precio*cantidad);
      setCantidad(1)
    }
  }

  const handlePayAtOnce = (idLibro, cantidad, rutaFoto, nombre, precio) => {
    if(!user){
      history('/login')
    }else{  
      state.cart = []
      agregarLibroCarrito(idLibro, cantidad, rutaFoto, nombre, precio*cantidad);
      history('/cash')
      setCantidad(1)
    }
  }

  const handleCantidad = (e) => {
    setCantidad(e.target.value) 
  }
  
  return (
    <>
       <MenuCliente />
       <div className='flex flex-row flex-wrap bg-white w-full overflow-auto font-roboto h-screen'>
         <div className='ml-8 flex flex-row mt-12 w-2/3'>
           <img 
              src = {book.rutaFoto && book.rutaFoto.replace(" ", "")} 
              alt={`Cargando`} 
              className="w-60 h-96"
            /> 
           <div className='flex flex-col ml-12'>
             
             <span><p className='font-bold text-4xl'>{book.nombre}</p></span>
             <span><p className='font-bold text-2xl mt-2 text-red-price'>US ${book.precio}</p></span>

             <span className='mt-2'> <p>{book.promedioCalificacion} de 5</p> <BookRating book = { book } size={20}  />
             </span>

             <span><p className='text-xl mt-6'><strong>Autor : </strong> {book.autor}</p></span>
             <span><p className='text-xl mt-6'><strong>Género : </strong> {book.categoria}</p></span>
             <span><p className='text-xl mt-6'><strong>Número de páginas : </strong> {book.numeroPaginas}</p></span>
             <span><p className='text-xl mt-6'><strong>Editorial : </strong> {book.editorial}</p></span>
             <span><p className='text-xl mt-6'><strong>Idioma : </strong> {book.idioma}</p></span>

           </div> 
         </div>

    <div 
      className=' flex-flex-col w-56 h-56 border border-border-book rounded-lg ml-32 mt-32 '
    >

      <p className='text-red-price font-bold text-2xl text-center'>US ${book.precio * cantidad || 0}</p>

      <div className='w-full mt-8 ml-4'>
        <label htmlFor="">Cantidad</label>
           <select name="Cantidad" id="cantidad" onChange={handleCantidad}  className='outline-none bg-gray-select rounded-lg ml-4 w-2/5'>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>
             <option value="13">13</option>
             <option value="14">14</option>
             <option value="15">15</option>
           </select>
          <button className='bg-yellow rounded-xl px-10 font-bold text-base py-1 mt-3 font-galdeano' onClick={() => handleAgregarLibro(book.idlibro, cantidad, book.rutaFoto, book.nombre, book.precio)}>Agregar al carrito</button>
          <button className='bg-orange rounded-xl px-14 font-bold text-base py-1 mt-3 font-galdeano' onClick={() => handlePayAtOnce(book.idlibro, cantidad, book.rutaFoto, book.nombre, book.precio)}>¡Comprar Ya!</button>
        </div>

         </div>

         {
           user !== null && (
            <div className='flex flex-col w-full items-center'>
              <h1 className='text-3xl mb-2'>Calificar libro</h1>
                <BookStartRating book={book} />
            </div>
           )
         }
       </div>
       <Footer/>
    </>
  )
}

export default BookInfoPage