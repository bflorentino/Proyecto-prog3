
const URL = "https://localhost:44373/api/Cliente"

export const addUser = async({values}) => {

    const post = {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },        
    };

    const res = await fetch(URL, post);
    const data = await res.json();

    return data;
 }