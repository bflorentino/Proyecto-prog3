import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editBookService } from './EditBookService'

const EditForm = ({Book}) => {

    const [image, setImage] = useState(null)
    const history = useNavigate();    
    const imageHandler = ( e ) => {
        // Preview image 
        const reader = new FileReader();
        reader.onload = () => {
            console.log("Hola mundo")
            reader.readyState === 2 && setImage(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

   const editBookHandler = (e) => {
        
        e.preventDefault();

        const form = document.querySelector('#edit-data');    
        
        editBookService({
            idLibro: Book.idlibro,
            Nombre: form.Nombre.value,
            Precio: form.Precio.value,
            Año: form.Año.value,
            NumeroPaginas: form.NumeroPaginas.value,
            Autor: form.Autor.value,
            Editorial: form.Editorial.value,
            Idioma: form.Idioma.value,
            IdCategoria: form.IdCategoria.value,
        }).then(data =>{
            history('/Get-BooksAdm')
            }
        )
    }

  return (
       
    <div className="flex items-center flex-col">                   
        <form encType="multipart/form-data" className="flex flex-col mt-20 w-1/2 bg-white shadow-md rounded-md" id="edit-data">

            <div className="mt-6">
                <h1 className="text-3xl text-center font-poppins">Editar Libro</h1>
            </div>

            <div className='flex flex-row w-full'>
                <div className="mt-8 flex flex-col ml-12 w-1/2">
                        <div className=" ml-4 w-full flex">
                            <label className='text-1xl w-1/4 font-poppins'  htmlFor="Nombre">Nombre:</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                name="Nombre"
                                defaultValue={Book.nombre && Book.nombre}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div> 
                        <div className="ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="Precio">Precio:</label>
                            <input 
                                type="number"
                                autoComplete="off"
                                name="Precio"
                                defaultValue={Book.precio && Book.precio}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div> 
                        <div className=" ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="Anio">Fecha:</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                name="Año"
                                defaultValue={Book.anio && Book.anio}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div>                 
                        <div className="ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="NumeroPaginas">Paginas:</label>
                            <input 
                                type="number"
                                autoComplete="off"
                                name="NumeroPaginas"
                                defaultValue={Book.numeroPaginas && Book.numeroPaginas}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div>
                        
                        <div className="ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="Autor">Autor:</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                name="Autor"
                                defaultValue={Book.autor && Book.autor}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div> 
                            
                        <div className="ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="Editorial">Editorial:</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                name="Editorial"
                                defaultValue={Book.editorial && Book.editorial}
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div> 
                    
                        <div className=" ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="Idioma">Idioma:</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                name="Idioma"
                                defaultValue={Book.idioma && Book.idioma}     
                                className='px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue'
                            />
                        </div>
                        
                        <div className="ml-4 w-full flex mt-4">
                            <label className='text-1xl w-1/4' htmlFor="IdCategoria">Género:</label>
                            <select 
                                name="IdCategoria" 
                                className="px-1 rounded-md border-gray outline-none border-2 w-2/3 placeholder:text-dark-blue"
                                defaultValue={Book.idCategoria? Book.idCategoria : 1}
                            >
                                <option value={1}>Aventura</option>
                                <option value={2}>Fantasía</option>
                                <option value={3}>Ciencia Ficción</option>
                                <option value={4}>Romance</option>
                            </select>                  
                        </div>

                        <div className="w-full flex mt-4 ml-4">
                            <label className="text-1xl w-1/4" htmlFor="Foto">Cambiar foto:</label>
                            <input
                                type="file"
                                className="w-2/3"
                                name='Foto'
                                accept='image/*'
                                onChange={imageHandler}
                            />
                        </div> 

                    <div className="self-center mb-4 mt-6 w-1/2 bg-green text-white text-center px-6 py-1 rounded-md">
                        <button type="submit" onClick={editBookHandler}>
                            Editar
                        </button>
                    </div>
                </div>
                    <div className='w-1/2 mt-10 ml-10'>
                        <img 
                            src=
                            {
                                image ? image
                                : Book.rutaFoto && Book.rutaFoto.replace(" ", "")
                            } 
                            alt="" 
                            className='h-80'
                        />
                    </div>
                </div>
             </form> 
    </div> 
  )
}

export default EditForm;