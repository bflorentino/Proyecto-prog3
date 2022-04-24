export const getAllBooks = async () => {
    
    const URL = "https://localhost:44373/api/Libro"
    const res = await fetch(URL);
    const { data } = await res.json();
    return data;
}

export const getAllBooksAdm = async (token) => {

    const URL = "https://localhost:44373/api/Libro/admin"
    const res = await fetch( URL, {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${token}`,
        }
    });

    const { data } = await res.json();
    return data;
}

export const getBookById = async (id, nombreUsuario) => {

    const URL =  `https://localhost:44373/api/Libro/${id}/${nombreUsuario}`
    const res = await fetch(URL);
    const { data } = await res.json();
    return data;
}