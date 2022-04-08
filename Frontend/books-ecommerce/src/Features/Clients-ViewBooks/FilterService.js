const URL = 'https://localhost:44373/api/Libro/filtro'

export const getBooksFiltered = async (filter, books) => {

    console.log(books)

    const post = {
        method: 'POST',
        body: JSON.stringify({
            ...filter, 
            Libros: [...books]
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },        
    };

    const res = await fetch(URL, post);
    const { data } = await res.json();
    return data;
}