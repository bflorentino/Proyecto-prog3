import React, { useEffect, useState } from 'react'
import { getItemsByInvoice } from './PayService';

const InvoiceItems = ({invoiceCode}) => {

    const [items, setItems] = useState([]);

    useEffect(()=> {
        getItemsByInvoice(invoiceCode)
            .then(data => {
                setItems([...data])
            })

    // eslint-disable-next-line
    }, [])

  return (
      <div className='flex flex-col w-full'>
          <div className='flex flex-row w-full mb-2 font-bold'>
            <p className='w-1/2'>Artículo</p>
            <p className='w-1/5'>Cantidad</p>
            <p className='ml-10'>Monto</p>
          </div>

     <ul className='list-disc'>
        {
            items.map(item => (
                <li key={item.idlibro} className='flex flex-row text-xs' >
                    <p className='w-1/2'>{item.nombreLibro}</p>
                    <p className='w-1/5'>{item.cantidad}</p>
                    <p className='ml-10'>{item.precio} US $</p>
                </li>
            ))
        }
     </ul>
    </div>
  )
}

export default InvoiceItems