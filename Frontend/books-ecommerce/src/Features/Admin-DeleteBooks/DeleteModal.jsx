import swal from "sweetalert";
import { deleteBook } from "./deleteBookServise";

export const eliminarAlerta = (idLibro) => {

    swal({
        title: "Eliminar",
        text: "¿Estas seguro que quieres eliminar el libro?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if(respuesta){
            deleteBook(idLibro);
            swal({
                text: "El Libro ha sido eliminado",
                icon: "success"
            });
            
            setTimeout(function(){
                window.location.href = window.location.href;
            }, 1000);
        };
    });
};