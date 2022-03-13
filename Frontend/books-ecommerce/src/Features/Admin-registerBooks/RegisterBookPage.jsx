import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const RegisterBooksSchema = yup.object().shape({

    Nombre: yup.string()
    .required('Indique el nombre')
    .max(30),
    Precio: yup.number()
    .required('Indique un precio')
    .max(18,0),
    Autor: yup.string()
    .required('Indique el autor')
    .max(30),
    Anio: yup.date()
    .required('Indique el año'),
    Editorial: yup.string()
    .required('indique la editorial'),
    NumeroPaginas: yup.string()
    .required('Indique el número de páginas')
    .max(5),
    Idioma: yup.string()
    .required('Indique el idioma')
    .max(15),
    Categoria: yup.string()
    .required('Categoria'),
    Foto: yup.object()
    .required('Suba una foto'),
    EnVenta: yup.bool()
    .required('¿Esta en venta el libro?')
});

export const RegisterBookPage = () => {
    
    let inputStyle = 'ml-2 px-1 rounded-md border-gray outline-none border-2 w-full placeholder:text-dark-blue';
    let text = 'text-1xl font-poppins';

    return(
        <div className="flex items-center flex-col mt-20">
            
            <Formik
                initialValues={{
                    Nombre: '',
                    Precio: '',
                    Autor: '',
                    Anio: '',
                    Editorial: '',
                    NumeroPaginas: '',
                    Idioma: '',
                    Categoria: '',
                    Foto: '',
                    EnVenta: ''
                }}
                validationSchema = {RegisterBooksSchema}
                // onSubmit={}
            >
                {({errors, touched}) => (
                    
                    <Form className="flex flex-col mt-20 w-3/4 bg-white shadow-md rounded-md">

                        <div className="mt-6">
                            <h1 className="text-3xl text-center font- font-poppins">Registrar Libro</h1>
                        </div>

                        <div className="mt-10 flex flex-row">
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
                                    name="Anio"
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
                                    name="idioma"
                                    className={inputStyle}
                                />
                            </div>

                        </div>

                        <div className="mt-4 flex flex-row">
                            
                            <div className="ml-4 w-2/6 flex">
                                <label className={text} htmlFor="Categoria">Categoria:</label>
                                <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="Categoria"
                                    className={inputStyle}
                                />
                            </div>

                            <div className="ml-4 w-2/6 flex">
                                <label className={text} htmlFor="Foto">Foto:</label>
                                <input 
                                    className="ml-2"
                                    type="file"
                                    name="Foto"
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