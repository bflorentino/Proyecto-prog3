using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Controllers;
using Capa_de_servicios.Request;

namespace Capa_de_servicios.Servicios
{
    public interface ILibroServices
    {
        public Task<Respuestas> Getbooks();

        public Task<Respuestas> EditBooks(LibroRequest omodel);

        public Task<Respuestas> GetbookByID(LibroRequest omodel);

    }
}
