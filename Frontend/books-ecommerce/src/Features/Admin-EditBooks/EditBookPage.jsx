import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../Admin-getBooks/getBooksService'
import EditForm from './EditForm';

export const EditBookPage = () => {
    
    const [book, setBook] = useState({})
    const { bookId } = useParams();

    useEffect(() => {
        getBookById(bookId).then(book =>{
            setBook({...book})
    })}, [bookId])
    
    return(
      <EditForm Book={book}></EditForm>
    )
}