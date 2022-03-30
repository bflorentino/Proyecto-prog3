const URL = 'https://localhost:44373/api/Pagos'

export const payBooks = async (values) => {

    console.log(values)

    const post = {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },        
    };

    const res = await fetch(URL, post);
    const { mensaje} = await res.json();

    return mensaje;
}