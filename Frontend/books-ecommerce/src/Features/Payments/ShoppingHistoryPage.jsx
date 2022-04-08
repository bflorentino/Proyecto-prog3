import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { MenuCliente } from '../Menues/MenuCliente';
import InvoiceGrid from './InvoiceGrid';
import NoInvoice from './NoInvoice';
import { getInvoice } from './PayService';
import { Footer } from '../Footer/Footer';

const ShoppingHistoryPage = () => {

  const [ invoice, setInvoices ] = useState(null);
  const {user} = useContext(AuthContext);

  useEffect(()=> {
    if(user !== null){
      getInvoice(user.data.nombreUsuario, user.data.token)
      .then(data => {
        setInvoices([...data.reverse()])
      })
    }
  //eslint-disable-next-line
  }, [])

  if(user === null){
    return <Navigate to='/login' replace />
  }

  if(user.data.idRol === 2){
    return <Navigate to='/Get-BooksAdm' replace />
  }

  return (
    <>
      <MenuCliente />
      {
        invoice !== null
        ?
        
          ( invoice.length > 0
          ?
            (<div className='bg-white w-full flex flex-col'>
            <h1 className='text-4xl font-notoSans font-bold mt-10 text-center'>Su Historial de compras</h1>
            <div className='flex flex-col w-full items-center mt-12'>

              <span className='flex flex-row font-lato font-bold text-xl w-2/5'>  
                <p className='w-1/2'> CODIGO</p>
                <p className=''> FECHA </p>
                <p className='ml-20'> TOTAL </p>
              </span>

              <div className='w-2/5 mb-48'>
              {
                invoice.map((inv) => (
                <InvoiceGrid key={inv.codigoFactura} inv={inv} />
                ))
              }
              </div>
              
            </div>

          </div>

        ) 
        :
          (<NoInvoice />)
      )
      :(
        <h1 className='text-center w-full mt-36 text-3xl font-bold h-[165px]'>Cargando...</h1>
      )
  }

      <Footer/>


    </>
  )
}

export default ShoppingHistoryPage