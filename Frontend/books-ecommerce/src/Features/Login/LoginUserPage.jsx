import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

const LoginSchema = yup.object().shape({
    NombreUsuario: yup.string()
    .required("Escriba su nombre de usuario"),
    contraseña: yup.string()
    .required("Escribe tu contraseña")
});

const Login = () => {

    let {logIn} = useContext(AuthContext);

    return(
    <>
        <div className="flex items-center flex-col mt-20">

            <Formik
                initialValues={{NombreUsuario:'', contraseña:''}}
                validationSchema = {LoginSchema}
                onSubmit={
                    logIn
                }
            >
            {({errors, touched}) => (
            <Form className="flex flex-col items-center mt-20 w-1/4 bg-white shadow-md rounded-md">

                <div className="mt-6">
                    <h2 className="text-center text-3xl font-bold font-poppins">Acceder</h2>
                </div>

                <div className="mt-10 w-4/5">
                    <Field
                        type="text"
                        placeholder="Usuario"
                        autoComplete="off"
                        name="NombreUsuario"
                        className="border-light-blue outline-none text-center border-b-2 w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.NombreUsuario && touched.NombreUsuario ? (
                        <div className="text-red-error">{errors.NombreUsuario}</div>
                    ): null}
                </div>

                <div className="mt-6 w-4/5">
                    <Field
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        name="contraseña"
                        className="text-center outline-none border-b-2 border-light-blue w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.contraseña && touched.contraseña ? (
                        <div className="text-red-error">{errors.contraseña}</div>
                    ): null}
                </div>

                <div className="mt-6 bg-green text-white px-6 py-1 rounded-md">
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div className='mt-2 mb-6'>
                    <p>¿No tienes una cuenta aún?  
                        <Link to={`/Sign-Up`} className='text-blue-top-buttom'>
                            Crear
                        </Link>
                    </p>
                </div>

            </Form>    
                )}
            </Formik>
        </div>
    </>
    );
}

export default Login;