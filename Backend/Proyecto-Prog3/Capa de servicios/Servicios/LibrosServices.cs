using Capa_de_datos;
using Capa_de_servicios.Request;
using Capa_de_servicios.Response;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Modelos;

namespace Capa_de_servicios.Servicios
{
    public class LibrosServices : ILibroServices
    {
        private readonly E_CommerceContext _context;

        public LibrosServices(E_CommerceContext context)
        {
            _context = context;
        }

        public async Task<Respuestas> AddLibro(LibroBinding libro)
        {
            var respuesta = new Respuestas();

            var book = new Libro
            {
                Nombre = libro.Nombre,
                Precio = libro.Precio,
                Autor = libro.Autor,
                Año = libro.Año,
                Editorial = libro.Editorial,
                NumeroPaginas = libro.NumeroPaginas,
                Idioma = libro.Idioma,
                IdCategoria = libro.IdCategoria,
                RutaFoto = libro.RutaFoto,
                EnVenta = true
            };
            await _context.Libros.AddAsync(book);
            await _context.SaveChangesAsync();
            respuesta.Mensaje = "El libro ha sido agregado correctamente";
            respuesta.Exito = 1;
            return respuesta;
        }

        public async Task<Respuestas> EliminarLibro(int eliminar)
        {
            var respuesta = new Respuestas();
            var libro = await _context.Libros.FirstOrDefaultAsync(a => a.IdLibro == eliminar);
             libro.EnVenta = false;
            _context.Update(libro);
            await _context.SaveChangesAsync();

            respuesta.Mensaje = "el libro ha sido eliminado correctamente";
            respuesta.Exito = 1;
            return respuesta;
        }

    public async Task<Respuestas> Getbooks()
        {
            Respuestas oRespuesta = new  Respuestas();
            var listaLibro = await (from libros in _context.Libros 
                                    join categoria in _context.Categoria 
                                    on libros.IdCategoria equals categoria.IdCategoria 
                                    select new LibroViewModel     
                                    {
                                         Nombre = libros.Nombre,
                                         Autor = libros.Autor,
                                         Categoria = categoria.CategoriaLibro,
                                         Editorial = libros.Editorial,
                                         NumeroPaginas = libros.NumeroPaginas,
                                         Idioma = libros.Idioma,
                                         RutaFoto = libros.RutaFoto,
                                         IdCategoria = libros.IdCategoria,
                                         Anio = libros.Año,
                                         Idlibro = libros.IdLibro,
                                         Precio = libros.Precio,
                                         EnVenta = libros.EnVenta
                                    }).ToListAsync();

            oRespuesta.Data = listaLibro;
            return oRespuesta;
        }

        public async Task<Respuestas> EditBooks(LibroBinding omodel) 
        {
            Respuestas orepuesta = new Respuestas();
            try
            {           
                    Libro olibro = await _context.Libros.FindAsync(omodel.Idlibro);
                    olibro.Nombre = omodel.Nombre;
                    olibro.Precio = omodel.Precio;
                    olibro.Autor = omodel.Autor;
                    olibro.Año = omodel.Año;
                    olibro.Editorial = omodel.Editorial;
                    olibro.NumeroPaginas = omodel.NumeroPaginas;
                    olibro.Idioma = omodel.Idioma;
                    olibro.IdCategoria = omodel.IdCategoria;
                    olibro.RutaFoto = omodel.RutaFoto;

                    orepuesta.Mensaje = "el libro ha sido editado correctamente";
                    _context.Entry(olibro).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                   await _context.SaveChangesAsync();
                    orepuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                orepuesta.Mensaje = ex.Message;
            }
            return orepuesta;
        }

        public async Task<Respuestas> GetbookByID(int id) 
        {
            Respuestas orepuesta = new Respuestas();

            var Libro =  from libros in _context.Libros
                         join categoria in _context.Categoria
                         on libros.IdCategoria equals categoria.IdCategoria
                         where libros.IdLibro == id
                         select new LibroViewModel
                         {
                             Nombre = libros.Nombre,
                             Autor = libros.Autor,
                             Categoria = categoria.CategoriaLibro,
                             Editorial = libros.Editorial,
                             NumeroPaginas = libros.NumeroPaginas,
                             Idioma = libros.Idioma,
                             RutaFoto = libros.RutaFoto,
                             IdCategoria = libros.IdCategoria,
                             Anio = libros.Año,
                             Idlibro = libros.IdLibro,
                             Precio = libros.Precio,
                             EnVenta = libros.EnVenta
                         };
            orepuesta.Data = Libro;
            return orepuesta;
        }

        public async Task<Respuestas> GetbookByName(string nombre)
        {
            Respuestas orepuesta = new Respuestas();

            var Libro = from libros in _context.Libros
                        join categoria in _context.Categoria
                        on libros.IdCategoria equals categoria.IdCategoria
                        where libros.Nombre.Contains(nombre)
                        select new LibroViewModel
                        {
                            Nombre = libros.Nombre,
                            Autor = libros.Autor,
                            Categoria = categoria.CategoriaLibro,
                            Editorial = libros.Editorial,
                            NumeroPaginas = libros.NumeroPaginas,
                            Idioma = libros.Idioma,
                            RutaFoto = libros.RutaFoto,
                            IdCategoria = libros.IdCategoria,
                            Anio = libros.Año,
                            Idlibro = libros.IdLibro,
                            Precio = libros.Precio,
                            EnVenta = libros.EnVenta
                        };
            orepuesta.Data = Libro;
            return orepuesta;
        }
    }
}