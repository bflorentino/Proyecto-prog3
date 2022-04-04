import swal from "sweetalert";

export const AgregarLibrosModal = () => {

    swal({
        title: "¿Con que frecuencia agregan nuevos libros a la tienda?",
        text: "Los libros nuevos son agregados constantemente, siempre y cuando vender un libro este dentro de las posibilidades.",
        icon: "info"
    })
};