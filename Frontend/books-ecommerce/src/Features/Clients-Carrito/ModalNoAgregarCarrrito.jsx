import swal from "sweetalert";

export const ModalNoAgregarCarrito = () => {
    
    swal({
        title: "Este libro ya se encuentra en el carrito",
        icon: "info"
    });
}