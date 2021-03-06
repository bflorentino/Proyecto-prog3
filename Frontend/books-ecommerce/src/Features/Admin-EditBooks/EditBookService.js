let URL = "https://localhost:44373/api/Libro"

export const editBookService = async (values, token) => {

    const form = new FormData();

    form.append("idLibro", values.idLibro)
    form.append('Nombre', values.Nombre);
    form.append('Precio', values.Precio);
    form.append('Autor', values.Autor);
    form.append('Año', values.Año);
    form.append('Editorial', values.Editorial);
    form.append('NumeroPaginas', values.NumeroPaginas);
    form.append('Idioma', values.Idioma);
    form.append('IdCategoria', values.IdCategoria);
    form.append('Foto', values.Foto);

    const response = await fetch(URL, {

        method: 'PUT',
        headers: {
            "Authorization":`Bearer ${token}`,
        },
        body: form
    });

    const data = await response.json();
    return data
}