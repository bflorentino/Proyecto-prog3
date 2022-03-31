import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../Admin-getBooks/getBooksService'
import EditForm from './EditForm';
import { MenuAdmin } from '../Menues/MenuAdmin';
import { AuthContext } from '../Context/AuthContext';

export const EditBookPage = () => {
    
    const [book, setBook] = useState({})
    const { bookId } = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getBookById(bookId, user.data.nombreUsuario).then(book =>{
            setBook(book[0])
      // eslint-disable-next-line
    })}, [bookId])
    
    return(
      <div className='content'>
        <MenuAdmin/>
        <EditForm Book={book} />
      </div>
    )
}