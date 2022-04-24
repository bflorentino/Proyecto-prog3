export const validateForm = ( form ) => {

    // Validar formulario de edición de un libro

    console.log(form)

    if(form.Nombre.value === "") return "El titulo del libro es requerido";
    if(form.Precio.value === "") return "Se requiere el precio del libro";
    if(form.Precio.value > 10000 || form.Precio.value < 1) return "Precio inválido";
    if(form.Autor.value === "") return "Se requiere el autor del libro";
    if(form.NumeroPaginas.value === "") return "Se requieren las páginas del libro";
    if(form.NumeroPaginas.value > 10000 || form.NumeroPaginas.value < 5) return "Cantidad de páginas inválida";
    if(form.Editorial.value === "") return "Se requiere la editorial del libro";
    if(form.Anio.value === "") return "Se requiere el año de publicación del libro";
    if(form.Anio.value < 1 || form.Anio.value > 2099) return "Año inválido"
    
    return true;
}