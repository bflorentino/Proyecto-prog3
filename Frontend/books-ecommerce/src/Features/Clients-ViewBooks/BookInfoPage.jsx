import React, { useContext, useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom'
import { getBookById } from '../Admin-getBooks/getBooksService'
import { MenuCliente } from '../Menues/MenuCliente'
import { AuthContext } from '../Context/AuthContext'
import BookRating from '../Rate-Books/BookRating'
import { Footer } from '../Footer/Footer'

let Cantidad = 1;

const BookInfoPage = () => {

  const [ book, setBook ] = useState({})
  const history = useNavigate();
  const { bookId } = useParams();
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

const handleClick = (idLibro, cantidad, rutaFoto, nombre, precio) => {
  if(!user){
      history('/login')
    }else{
      agregarLibroCarrito(idLibro, cantidad, rutaFoto, nombre, precio*cantidad);
      Cantidad = 1
    }
  }

  const handlePayAtOnce = (idLibro, cantidad, rutaFoto, nombre, precio) => {
    if(!user){
      history('/login')
    }else{  
      state.cart = []
      agregarLibroCarrito(idLibro, cantidad, rutaFoto, nombre, precio*cantidad);
      Cantidad = 1
      history('/cash')
    }
  }

    function getCantidad(){
      Cantidad = document.getElementById('cantidad').value;  
    }
  
  return (
    <>
       <MenuCliente />
       <div className='flex flex-row wrap bg-white w-full overflow-auto font-roboto h-screen'>
         <div className='ml-8 flex flex-row mt-12 w-2/3'>
           <img 
              src = {book.rutaFoto && book.rutaFoto.replace(" ", "")} 
              alt={`${book.nombre}`} 
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

      <p className='text-red-price font-bold text-2xl text-center'>US ${book.precio}</p>

      <div className='w-full mt-8 ml-4'>
        <label htmlFor="">Cantidad</label>
           <select name="Cantidad" id="cantidad" onChange={() => getCantidad()}  className='outline-none bg-gray-select rounded-lg ml-4 w-2/5'>
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
          <button className='bg-yellow rounded-xl px-10 font-bold text-base py-1 mt-3 font-galdeano' onClick={() => handleClick(book.idlibro, Cantidad, book.rutaFoto, book.nombre, book.precio)}>Agregar al carrito</button>
          <button className='bg-orange rounded-xl px-14 font-bold text-base py-1 mt-3 font-galdeano' onClick={() => handlePayAtOnce(book.idlibro, Cantidad, book.rutaFoto, book.nombre, book.precio)}>¡Comprar Ya!</button>
        </div>

         </div>
       </div>
       <Footer/>
    </>
  )
}

export default BookInfoPage