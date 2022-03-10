const URL = "https://localhost:44373/api/Libro"

export const getAllBooks = async () => {

    const res = await fetch(URL);
    const { data } = await res.json();
    return data;
}