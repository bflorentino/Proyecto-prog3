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
import { RegisterBookPage } from '../Admin-registerBooks/RegisterBookPage';
import { EditBookPage } from '../Admin-EditBooks/EditBookPage';

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
                            path = '/'
                            element= {<Login />}
                        />
                        <Route exact path='/Get-BooksAdm' element={<PrivateRoute/>}>
                            <Route exact path='/Get-BooksAdm' element={<GetBooksPage/>}/>
                        </Route>
                        <Route exact path='/Register-BooksAdm' element={<PrivateRoute/>}>
                            <Route exact path='/Register-BooksAdm' element={<RegisterBookPage/>}/>
                        </Route>
                        <Route exact path='/Edit-BooksAdm/:bookId' element={<PrivateRoute/>}>
                            <Route exact path='/Edit-BooksAdm/:bookId' element={<EditBookPage/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </div>
          </Router>
    )
}

export default AppRouter