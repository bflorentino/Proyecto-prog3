import { React, useState, useEffect } from "react";
import { getAllBooks } from "./getBooksService";
import ListView from "./ListView";
import TableView from "./TableView";
import { MenuAdmin } from "../Menues/MenuAdmin";

const GetBooksPage = () => {

    const [viewFormat, setViewFormat] = useState(true);
    const [ books, setBooks ] = useState(null)

    useEffect(()=>{
      getAllBooks().then(books => {
        setBooks([...books])
      })
    }, [books])

    const changeToTableViewFormat = ( e ) => {
        document.getElementById("btnListView").classList.remove("active")
        document.getElementById("btnTableView").classList.add("active")
        setViewFormat(false);
    }

    const changeToListViewFormat = ( e ) =>{
        document.getElementById("btnTableView").classList.remove("active")
        document.getElementById("btnListView").classList.add("active")
        setViewFormat(true)
    }

    return (
      <>
        <div className="content">
          <MenuAdmin />
          <h1 className="text-center font-poppins font-bold text-4xl mt-12 mb-6">
            Lista de libros en venta
          </h1>

          <div className="flex justify-center">
            <button
              className="text-blue-top-buttom px-3 py-1 active"
              onClick={changeToListViewFormat}
              id="btnListView"
            >
              Ver Lista
            </button>
            <button
              className="text-blue-top-buttom px-3 py-1"
              onClick={changeToTableViewFormat}
              id="btnTableView"
            >
              Ver tabla
            </button>
          </div>

          {books !== null ? (
            viewFormat ? (
              <ListView Books={books} />
            ) : (
              <TableView Books={books} />
            )
          ) : (
            <h1 className="text-center w-full mt-24 text-3xl font-bold">
              Cargando...
            </h1>
          )}
        </div>
      </>
    );
}

export default GetBooksPage