import React from 'react'
import { BrowserRouter as 
    Router, 
    Route,
    Routes } from "react-router-dom";
import { AddUserPage } from '../Sign Up/AddUserPage';
import { Login } from '../Login/LoginUserPage';
import GetBooksPage from '../Admin-getBooks/getBooksPage';

const AppRouter = () => {
    return(
        <Router>
            <div>
                <Routes>
                    <Route
                        exact
                        path = '/Sign-Up'
                        element= {<AddUserPage />}
                    />
                    <Route
                        exact
                        path = '/Log-In'
                        element= {<Login />}
                    />
                    <Route
                        exact
                        path = '/Get-BooksAdm'
                        element= {<GetBooksPage />}
                    />
                </Routes>
            </div>
          </Router>
    )
}

export default AppRouter