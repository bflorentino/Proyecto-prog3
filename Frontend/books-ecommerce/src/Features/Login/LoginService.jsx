var url = 'https://localhost:44373/api/Usuario/login'; 

const sendData = async({values}) => {
    try{
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error', error))
        .then(response => console.log('Success', response))
    }catch (error){
        console.log(error);
    }
}

export default sendData;