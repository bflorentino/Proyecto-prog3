import { React } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
    correo: yup.string().email("Correo inválido").required('Escribe un correo electrónico'),
    password: yup.string()
    .required("Escribe tu contraseña")
    .min(8, "Se requieren al menos 8 caracteres")
});

export const Login = () => {
    
    return(
    <>
        <div className="flex items-center flex-col mt-20">

            <Formik
                initialValues={{correo:'', password:''}}
                validationSchema = {LoginSchema}
                onSubmit={values => {
                    console.log(values)
                }}
            >
            {({errors, touched}) => (
            <Form className="flex flex-col items-center mt-20 w-1/4 bg-white shadow-md rounded-md">

                <div className="mt-6">
                    <h2 className="text-center text-3xl font-bold font-poppins">Acceder</h2>
                </div>

                <div className="mt-10 w-4/5">
                    <Field
                        type="text"
                        placeholder="Correo Electrónico"
                        autoComplete="off"
                        name="correo"
                        className="border-light-blue outline-none text-center border-b-2 border-light-blue w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.correo && touched.correo ? (
                        <div className="text-red-error">{errors.correo}</div>
                    ): null}
                </div>

                <div className="mt-6 w-4/5">
                    <Field
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        name="password"
                        className="text-center outline-none border-b-2 border-light-blue w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.password && touched.password ? (
                        <div className="text-red-error">{errors.password}</div>
                    ): null}
                </div>

                <div className="mt-6 bg-green text-white px-6 py-1 rounded-md">
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div className='mt-2 mb-6'>
                    <p>¿No tienes una cuenta aún? <a href="#" className="text-gray underline">Crear</a></p>
                </div>

            </Form>    
                )}
            </Formik>
        </div>
    </>
    );
}