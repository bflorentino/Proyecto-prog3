import React, { useState } from 'react'
import InvoiceItems from './InvoiceItems'

const InvoiceGrid = ({inv}) => {
 
    const [areItemsShowed, setAreItemsShowed] = useState(false);

    const handleShowItemsClick = (e) => {
        setAreItemsShowed(!areItemsShowed);
    }

    return (
    
    <div>
        <span 
            className="flex flex-row w-full border-b-2 border-border-book mt-6 pb-8 flex-wrap  font-lato"
        >
            <p className='text-xs w-1/2 mt-4 mb-4'>{inv.codigoFactura}</p>
            <p className='mt-4 mb-4'>{inv.fecha}</p>
            <p className='ml-20 mt-4 mb-4 w-1/6'>{inv.monto } US$ </p>
            <img 
                src={ areItemsShowed ? `./assets/upload.png`: `./assets/down-arrow.png` } 
                alt=""
                className='w-4 h-4 mt-5 hover:cursor-pointer ml-4'
                onClick={handleShowItemsClick} 
            />

        {
            areItemsShowed && <InvoiceItems invoiceCode={inv.codigoFactura} />
        }

         </span>
        
    </div>
  )
}

export default InvoiceGrid



