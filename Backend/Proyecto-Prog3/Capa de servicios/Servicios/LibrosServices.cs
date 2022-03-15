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
            var listaLibro = await _context.Libros.ToListAsync();
             
            Respuestas oRespuesta = new  Respuestas();

            oRespuesta.Data = listaLibro;

            return oRespuesta;
        }

        public async Task<Respuestas> EditBooks(LibroRequest omodel) 
        {
            Respuestas orepuesta = new Respuestas();

            try
            {
           
                    Libro olibro = await _context.Libros.FindAsync(omodel.idLibro);
                    olibro.Nombre = omodel.Nombre;
                    olibro.Precio = omodel.Precio;
                    olibro.Autor = omodel.Autor;
                    olibro.Año = omodel.Año;
                    olibro.Editorial = omodel.Editorial;
                    olibro.NumeroPaginas = omodel.NumeroPaginas;
                    olibro.Idioma = omodel.Idioma;
                    olibro.IdCategoria = omodel.IdCategoria;

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

            Libro olibro = await _context.Libros.FindAsync(id);
            _context.Entry(olibro).State = Microsoft.EntityFrameworkCore.EntityState.Unchanged;
            orepuesta.Data = olibro;

            return orepuesta;
        }

    }
}
