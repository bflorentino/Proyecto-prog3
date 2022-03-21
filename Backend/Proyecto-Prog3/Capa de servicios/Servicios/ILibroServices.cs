using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Controllers;
using Capa_de_servicios.Request;
using Capa_de_servicios.Modelos;

namespace Capa_de_servicios.Servicios
{
    public interface ILibroServices
    {
        public Task<Respuestas> AddLibro(LibroBinding libroBinding);
        public Task<Respuestas> EliminarLibro(int eliminar);
        public Task<Respuestas> Getbooks();
        public Task<Respuestas> EditBooks(LibroBinding omodel);
        public Task<Respuestas> GetbookByID(int id);
        public Task<Respuestas> GetbookByName(string nombre);
        public Task<Respuestas> FilterBooks(LibroFiltradoBinding Filtro);
    }
}
