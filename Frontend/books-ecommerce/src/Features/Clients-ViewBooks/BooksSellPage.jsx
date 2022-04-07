import React, { useContext, useEffect, useState } from "react";
import { getAllBooks } from "../Admin-getBooks/getBooksService";
import BookGrid from "./BookGrid";
import FilterBooks from "./FilterBooks";
import { MenuCliente } from "../Menues/MenuCliente";
import { Footer } from "../Footer/Footer";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ToTopButton } from "../ToTop/ToTopButton";

const BooksSellPage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getAllBooks().then((books) => {
      setBooks([...books]);
    });
  }, []);

  const { user } = useContext(AuthContext);

  if (user !== null && user.data.idRol === 2) {
    return <Navigate to="/Get-BooksAdm" replace />;
  }

  return (
    <>
      <div className="content">
        <MenuCliente />
        <div className="flex flex-row h-full w-full bg-white">
          <div className=" h-full w-1/6 border-r border-b border-border-book pb-4">
            <FilterBooks setBooks={setBooks} />
          </div>
          <div className="flex flex-row flex-wrap w-5/6 mb-8">
            {books && (
              <div className="w-full h-24">
                <div>
                  <h1 className="text-3xl font-poppins font-bold mt-2 ml-4">
                    Libros en venta
                  </h1>
                </div>
                <div className="border-b border-border-book w-full  mr-2 p-2">
                  {books && <p className="ml-2">{`${books.length} resultados`}</p>}
                </div>
              </div>
            )}           
              {books ? (
                books.map(
                  (book) =>
                    book.enVenta && <BookGrid key={book.idlibro} Book={book} />
                )
              ) : (
                <h1 className="text-center w-full mt-72 text-3xl font-bold">
                  Cargando...
                </h1>
              )}
          </div>
        </div>
        <Footer />
        {/* <ToTopButton/> */}
      </div>
    </>
  );
};
export default BooksSellPage;
