const API = 'https://localhost:44373/api/Libro';

export const registerService = async ({values}, token) => {    
    
    let form = new FormData();
    
    form.append('nombre', values.Nombre);
    form.append('precio', values.Precio);
    form.append('autor', values.Autor);
    form.append('año', values.Año);
    form.append('editorial', values.Editorial);
    form.append('numeroPaginas', values.NumeroPaginas);
    form.append('idioma', values.Idioma);
    form.append('idCategoria', values.IdCategoria);
    form.append('foto', values.Foto);

    let response = await fetch(API, {

        method: 'POST',
        headers:{
            "Authorization":`Bearer ${token}`
        },
        body: form
    });

    let data = await response.json();

    if (response.status === 200){
        return data
    }
    
} 