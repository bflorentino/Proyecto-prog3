
const API = "https://localhost:44373/api/Libro/";

export const deleteBook = async(idLibro) => {
    
    let response = await fetch(API + idLibro, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    let data = await response.json();

    if(response.status === 200){
        return data;
    }
}
