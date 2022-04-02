const URL = 'https://localhost:44373/api/Pagos'

export const payBooks = async (values) => {
    
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

export const getCountries = async() => {
    
    const res = await fetch(URL);
    const { data } = await res.json()
    return data;
}

export const getInvoice = async(username) => {
    
    const URLInvoice = `${URL}/Usuario/${username}`

    const res = await fetch(URLInvoice);
    const { data } = await res.json()

    return data;
}

export const getItemsByInvoice = async(invoiceCode) => {
    
    const URLInvoiceCode = `${URL}/codigoFactura/${invoiceCode}`

    const res = await fetch(URLInvoiceCode);
    const { data } = await res.json()

    return data;
}