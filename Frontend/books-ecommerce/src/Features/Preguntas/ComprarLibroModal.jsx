import swal from "sweetalert";

export const ComprarLibroModal = () => {

    swal({
        title: "¿Como puedo comprar un libro?",
        text: "Para comprar un libro, debe de dar clic en el libro que desea, luego precionar la opción d agregar al carrito. Una vez hecho esto necesitara hacer clic en el carrito en la parte superio derecha y posteriormente clic en comprar, luego siga los pasos de compra.",
        icon: "info"
    })
};