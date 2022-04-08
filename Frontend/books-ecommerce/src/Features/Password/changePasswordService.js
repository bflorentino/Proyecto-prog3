const URL = "https://localhost:44373/api/Cliente/EditPs"

const changePassword = async(values, token) => {

    const response = await fetch(URL, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;   
}

export default changePassword;