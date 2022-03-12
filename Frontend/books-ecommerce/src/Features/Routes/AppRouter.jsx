import React from 'react'
import { BrowserRouter as 
    Router, 
    Route,
    Routes } from "react-router-dom";
import { AddUserPage } from '../Sign Up/AddUserPage';
import Login from '../Login/LoginUserPage';
import GetBooksPage from '../Admin-getBooks/getBooksPage';
import { AuthProvider } from '../Context/AuthContext';
import PrivateRoute from './PrivatesRoutes';

const AppRouter = () => {
    return(
        <Router>
            <div>
                <AuthProvider>
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
                        <Route exact path='/Get-BooksAdm' element={<PrivateRoute/>}>
                            <Route exact path='/Get-BooksAdm' element={<GetBooksPage/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </div>
          </Router>
    )
}

export default AppRouter