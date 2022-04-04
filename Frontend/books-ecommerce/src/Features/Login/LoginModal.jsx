import swal from "sweetalert";

export const loginAlerta = () => {

    swal({
        title: "Acceso Denegado",
        text: "Usuario o contraseña incorrectos",
        icon: "warning",
    })
};