const URL = 'https://localhost:44373/api/Libro/Calificar Libro'

export const rateBook = async (values, token) => {
    
    const post = {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": `Bearer ${token}`
        },        
    };

    const res = await fetch(URL, post);
    const { mensaje} = await res.json();

    return mensaje;
}