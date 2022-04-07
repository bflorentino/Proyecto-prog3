import React from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { addUser } from './SigupService';
import { useNavigate, Link } from 'react-router-dom';

// FORMIK VALIDATIONS
const SignUpSchema = Yup.object().shape({
    nombre : Yup.string()
    .required("Este campo es requerido"),
    apellido: Yup.string()
    .required("Este campo es requerido"),
    correoElectronico : Yup.string().email("Correo inválido").required('Se requiere un correo electrónico'),
    direccion : Yup.string()
    .required("Debe seleccionar su país"),
    nombreUsuario : Yup.string()
    .required("Se requiere un nombre de usuario")
    .min(5, "Este nombre es demasiado corto"),
    Contraseña : Yup.string()
    .required("Se requiere una contraseña")
    .min(8, "Se requieren al menos 8 caracteres")
});

export const AddUserPage = () =>{
    
    const history = useNavigate();

    return (
    <>
        <div className='flex items-center flex-col mt-6'>
            <h1 className='text-4xl font-bold font-poppins'>Crear nueva cuenta</h1>
            <Formik
                initialValues={{nombre:'', apellido:'', telefono:'', correoElectronico:'', direccion:'', nombreUsuario:'',Contraseña:''}}
                validationSchema = {SignUpSchema}
                onSubmit={values => {
                    addUser({values}).then(mensaje => {
                        history('/login', {replace:true})
                    })
                }}
            >
            {({ errors, touched }) => (
            <Form className='flex flex-col items-center mt-8 mb-5 w-1/3 bg-white shadow-md'>
                <div className='mt-6 w-4/5'>
                    <Field 
                        type="text"
                        autoComplete='off'
                        placeholder='Nombre'
                        name='nombre'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.nombre && touched.nombre ? (
                        <div className='text-red-error'>{errors.nombre}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field 
                        type="text"
                        autoComplete='off'
                        placeholder='Apellido'
                        name='apellido'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.apellido && touched.apellido ? (
                        <div className='text-red-error'>{errors.apellido}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field 
                        type="text"
                        autoComplete='off'
                        placeholder='Correo Electrónico'
                        name='correoElectronico'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.correo && touched.correo ? (
                        <div className='text-red-error'>{errors.correo}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field 
                        type="text"
                        autoComplete='off'
                        placeholder='Telefono'
                        name='telefono'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.telefono && touched.telefono ? (
                        <div className='text-red-error'>{errors.telefono}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field 
                        type="text"
                        autoComplete='off'
                        placeholder='Direccion'
                        name='direccion'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.direccion && touched.direccion ? (
                        <div className='text-red-error'>{errors.direccion}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field  
                        type="text"
                        autoComplete='off'
                        placeholder='Nombre de usuario'
                        name='nombreUsuario'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.nombreUsuario && touched.nombreUsuario ? (
                        <div className='text-red-error'>{errors.nombreUsuario}</div>
                    ) : null}
                </div>

                <div className='mt-6 w-4/5'>
                    <Field 
                        type="password"
                        autoComplete='off'
                        placeholder='Contraseña'
                        name='Contraseña'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                    {errors.Contraseña && touched.Contraseña ? (
                        <div className='text-red-error'>{errors.Contraseña}</div>
                    ) : null}
                </div>

                {/* <div className='mt-6 w-4/5'>
                    <Field 
                        type="password"
                        autoComplete='off'
                        placeholder='Confirmar Contraseña'
                        name='confirmPassword'
                        className='border-b-2 border-light-blue py-2 outline-none w-full focus:border-dark-blue placeholder:text-dark-blue'
                    />
                </div> */}
                <div className='mt-6 bg-dark-blue text-white px-14 py-2 rounded-lg'>
                <button type="submit">
                        Crear cuenta
                    </button>
                </div>
                <div className='mt-6 mb-6 bg-yellow  px-8 py-2 rounded-lg'>
                <Link to={`/Login`}>
                    Ya tengo una cuenta
                </Link>
                </div>
            </Form>
               )}
            </Formik>
        </div>
    </>       
    )
}