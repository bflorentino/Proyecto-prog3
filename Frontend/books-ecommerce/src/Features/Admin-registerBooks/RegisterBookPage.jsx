import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { registerService } from "./registerBookService";
import { useNavigate } from "react-router-dom";

const RegisterBooksSchema = yup.object().shape({

    Nombre: yup.string()
    .required('Indique el nombre')
    .max(30),
    Precio: yup.number()
    .required('Indique un precio')
    .max(10000),
    Autor: yup.string()
    .required('Indique el autor')
    .max(30),
    Año: yup.date()
    .required('Indique la fecha'),
    Editorial: yup.string()
    .required('indique la editorial'),
    NumeroPaginas: yup.number()
    .required('Indique el número de páginas')
    .max(10000),
    Idioma: yup.string()
    .required('Indique el idioma')
    .max(15),
    IdCategoria: yup.number()
    .required('Indique la categoria'),

});

export const RegisterBookPage = () => {
    
    const inputStyle = 'ml-2 px-1 rounded-md border-gray outline-none border-2 w-full placeholder:text-dark-blue';
    const text = 'text-1xl font-poppins';

    const history = useNavigate();
    const fileRef = useRef(null);

    return(
        <div className="flex items-center flex-col mt-20">
            
            <Formik
                initialValues={{
                    Nombre: '',
                    Precio: '',
                    Autor: '',
                    Año: '',
                    Editorial: '',
                    NumeroPaginas: '',
                    Idioma: '',
                    IdCategoria: 1,
                }}
                validationSchema = {RegisterBooksSchema}
                onSubmit={values => {
                    registerService({values}).then(data => {
                        history('/Get-BooksAdm')
                        console.log(data)
                    })
                }}
            >
                {({errors, touched, values, handleChange, setFieldValue}) => (
                    
                    <Form encType="multipart/form-data" className="flex flex-col mt-20 w-3/4 bg-white shadow-md rounded-md" id="form-data">

                        <div className="mt-6">
                            <h1 className="text-3xl text-center font- font-poppins">Registrar Libro</h1>
                        </div>

                        {errors.Nombre || errors.Precio || errors.Autor || errors.Año || errors.Editorial || errors.NumeroPaginas || errors.Idioma || errors.IdCategoria ? (
                            <div className="mt-2 w-2/6 text-center py-1 px-2 self-center rounded-sm">
                                <ul>
                                    {errors.Nombre && touched.Nombre ? (
                                        <li>{errors.Nombre}</li>
                                    ) : null}
                                    {errors.Precio && touched.Precio ? (
                                        <li>{errors.Precio}</li>
                                    ) : null}
                                    {errors.Autor && touched.Autor ? (
                                        <li>{errors.Autor}</li>
                                    ) : null}
                                    {errors.Año && touched.Año ? (
                                        <li>{errors.Año}</li>
                                    ) : null}
                                    {errors.Editorial && touched.Editorial ? (
                                        <li>{errors.Editorial}</li>
                                    ) : null}
                                    {errors.NumeroPaginas && touched.NumeroPaginas ? (
                                        <li>{errors.NumeroPaginas}</li>
                                    ) : null}
                                    {errors.Idioma && touched.Idioma ? (
                                        <li>{errors.Idioma}</li>
                                    ) : null}
                                    {errors.IdCategoria && touched.IdCategoria? (
                                        <li>{errors.IdCategoria}</li>
                                    ) : null}
                                </ul>
                            </div>
                        ): null}

                        <div className="mt-8 flex flex-row">
                            <div className=" ml-4 w-2/6 flex">
                                <label className={text} htmlFor="Nombre">Nombre:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Nombre"
                                    className={inputStyle}
                                />
                            </div>

                            <div className="ml-4 w-1/6 flex">
                                <label className={text} htmlFor="Precio">Precio:</label>
                                <Field 
                                    type="number"
                                    autoComplete="off"
                                    name="Precio"
                                    className={inputStyle}
                                />
                            </div>

                            <div className=" ml-4 w-1/6 flex">
                                <label className={text} htmlFor="Anio">Fecha:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Año"
                                    className={inputStyle}
                                />
                            </div>
                            
                            <div className="ml-4 w-1/6 flex">
                                <label className={text} htmlFor="NumeroPaginas">Paginas:</label>
                                <Field 
                                    type="number"
                                    autoComplete="off"
                                    name="NumeroPaginas"
                                    className={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex flex-row">
                            
                            <div className="ml-4 w-2/6 flex">
                                <label className={text} htmlFor="Autor">Autor:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Autor"
                                    className={inputStyle}
                                />
                            </div>
                        
                            <div className="ml-4 w-1/3 flex">
                                <label className={text} htmlFor="Editorial">Editorial:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Editorial"
                                    className={inputStyle}
                                />
                            </div>
                        
                            <div className=" ml-4 w-1/5 flex">
                                <label className={text} htmlFor="Idioma">Idioma:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Idioma"
                                    className={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex flex-row">
                            
                            <div className="ml-4 w-2/6 flex">
                                <label className="text-1xl font-poppins mt-1" htmlFor="IdCategoria">Categoria:</label>
                                <select 
                                    name="IdCategoria" 
                                    className="ml-2 mr-8 w-6/6 flex outline-none"
                                    value={values.IdCategoria}
                                    onChange={handleChange}
                                >
                                    <option value={1}>Aventura</option>
                                    <option value={2}>Fantasía</option>
                                    <option value={3}>Ciencia Ficción</option>
                                    <option value={4}>Romance</option>
                                </select>
                                
                            </div>

                            <div className="w-4/5 flex">
                                <label className="text-1xl font-poppins mt-1" htmlFor="Foto">Foto:</label>
                                <input
                                    ref={fileRef}
                                    type="file"
                                    className="ml-2"
                                    onChange={(event) => {
                                        setFieldValue("Foto", event.target.files[0])
                                    }}
                                />
                            </div>

                        </div>

                        <div className="self-center mb-4 mt-6 w-1/6 bg-green text-white text-center px-6 py-1 rounded-md">
                            <button type="submit">
                                Registrar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}