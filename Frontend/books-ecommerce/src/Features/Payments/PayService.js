const URL = 'https://localhost:44373/api/Pagos'

export const payBooks = async (values, token) => {
        
    const post = {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization":`Bearer ${token}`
        },        
    };

    const res = await fetch(URL, post);
    const { mensaje} = await res.json();

    return mensaje;
}

export const getCountries = async(token) => {
    
    const res = await fetch(URL, {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${token}`,
        }
    });
    const { data } = await res.json()
    return data;
}

export const getInvoice = async(username, token) => {
    
    const URLInvoice = `${URL}/Usuario/${username}`
    
    const res = await fetch(URLInvoice, {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${token}`,
        }
    });
    const { data } = await res.json()

    return data;
}

export const getItemsByInvoice = async(invoiceCode, token) => {
    
    const URLInvoiceCode = `${URL}/codigoFactura/${invoiceCode}`

    const res = await fetch(URLInvoiceCode, {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${token}`,
        }
    });
    const { data } = await res.json()

    return data;
}