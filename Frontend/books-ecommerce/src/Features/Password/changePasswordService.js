const URL = "https://localhost:44373/api/Cliente/EditPs"

const changePassword = async(values) => {

    const response = await fetch(URL, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: values,
    });

    let data = await response.json();

    if(response.status === 200){
        return data;
    }
}

export default changePassword;