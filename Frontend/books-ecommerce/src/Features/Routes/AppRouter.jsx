import React from 'react'
import { BrowserRouter as 
    Router, 
    Route,
    Routes } from "react-router-dom";
import { AddUserPage } from '../Sign Up/AddUserPage';
import Login from '../Login/LoginUserPage';
import GetBooksPage from '../Admin-getBooks/getBooksPage';
import { AuthProvider } from '../Context/AuthContext';
import AdminRoute from './AdminRoutes';
import { RegisterBookPage } from '../Admin-registerBooks/RegisterBookPage';
import { EditBookPage } from '../Admin-EditBooks/EditBookPage';
import BooksSellPage from '../Clients-ViewBooks/BooksSellPage';
import BookInfoPage from '../Clients-ViewBooks/BookInfoPage';
import PayPage from '../Payments/PayPage';

const AppRouter = () => {
    return(
        <Router>
            <div>
                <AuthProvider>
                    <Routes>
                        <Route
                            exact
                            path = '/'
                            element= {<BooksSellPage />}
                        />
                        <Route
                            exact
                            path = '/Sign-Up'
                            element= {<AddUserPage />}
                        />
                        <Route
                            exact
                            path = '/Login'
                            element= {<Login />}
                        />
                        <Route
                            exact
                            path = '/Cash'
                            element= {<PayPage />}
                        />                      
                        <Route
                            exact
                            path = '/Book-Info/:bookId'
                            element= {<BookInfoPage />}
                        />
                        <Route exact path='/Get-BooksAdm' element={<AdminRoute/>}>
                            <Route exact path='/Get-BooksAdm' element={<GetBooksPage/>}/>
                        </Route>
                        <Route exact path='/Register-BooksAdm' element={<AdminRoute/>}>
                            <Route exact path='/Register-BooksAdm' element={<RegisterBookPage/>}/>
                        </Route>
                        <Route exact path='/Edit-BooksAdm/:bookId' element={<AdminRoute/>}>
                            <Route exact path='/Edit-BooksAdm/:bookId' element={<EditBookPage/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </div>
          </Router>
    )
}

export default AppRouter