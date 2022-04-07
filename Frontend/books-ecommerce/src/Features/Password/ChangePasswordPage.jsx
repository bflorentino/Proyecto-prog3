import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import changePassword from "./changePasswordService";

const PasswordSchema = yup.object().shape({
    currentPassword: yup.string()
    .required("Escriba su contraseña actual"),
    newPassword: yup.string()
    .required("Escribe su nueva contraseña")
    .min(8, "Se requieren al menos 8 caracteres")
});

const ChangePasswordPage = () => {

    const {user} = useContext(AuthContext);

    return(
    <>
        <div className="flex items-center flex-col mt-20">

            <Formik
                initialValues={{currentPassword:'', newPassword:''}}
                validationSchema = {PasswordSchema}
                onSubmit=  {values=> {
                    changePassword({
                                nombreUsuario: user.data.nombreUsuario,
                                ...values
                                }).then(data => {
                        console.log("Su contraseña ha cambiado")
                    }).catch(error => {
                        console.log("No, no cambio")
                    })
                  }
                }
            >
            {({errors, touched}) => (
            <Form className="flex flex-col items-center mt-20 w-1/3 bg-white shadow-md rounded-md">

                <div className="mt-6">
                    <h2 className="text-center text-3xl font-bold font-poppins">Cambiar contraseña</h2>
                </div>

                <div className="mt-10 w-4/5">
                    <Field
                        type="password"
                        placeholder="Contraseña Actual"
                        autoComplete="off"
                        name="currentPassword"
                        className="border-light-blue outline-none border-b-2 w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.currentPassword && touched.currentPassword ? (
                        <div className="text-red-error">{errors.currentPassword}</div>
                    ): null}
                </div>

                <div className="mt-6 w-4/5">
                    <Field
                        type="password"
                        placeholder="Nueva Contraseña"
                        autoComplete="off"
                        name="newPassword"
                        className="outline-none border-b-2 border-light-blue w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                    {errors.newPassword && touched.newPassword ? (
                        <div className="text-red-error">{errors.newPassword}</div>
                    ): null}
                </div>

                <div className="mt-6 bg-green text-white px-6 py-1 rounded-md mb-4">
                    <button type="submit">
                        Cambiar contraseña
                    </button>
                </div>

            </Form>    
                )}
            </Formik>
        </div>
    </>
    );
}

export default ChangePasswordPage;