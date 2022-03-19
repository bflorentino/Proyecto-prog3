import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../Admin-getBooks/getBooksService'
import EditForm from './EditForm';
import { MenuAdmin } from '../Menues/MenuAdmin';

export const EditBookPage = () => {
    
    const [book, setBook] = useState({})
    const { bookId } = useParams();

    useEffect(() => {
        getBookById(bookId).then(book =>{
            setBook(book[0])
    })}, [bookId])
    
    return(
      <div className='content'>
        <MenuAdmin/>
        <EditForm Book={book} />
      </div>
    )
}