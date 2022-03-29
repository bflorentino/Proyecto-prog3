// const API = "https://localhost:44373/api/Libro/nombre/{nombre}";
const API = "https://localhost:44373/api/Libro/nombre/";

export const BusquedaService = async(nombreLibro) => {

    let response = await fetch(API + nombreLibro, {
        
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        },
    });

    let data = await response.json();

    if(response.status === 200){
        return data;
    }
}