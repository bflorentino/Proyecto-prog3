using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Servicios
{
    public interface IAlmacenamientoServices
    {
        public Task<string> CrearFoto(byte[] file, string contentType, string extension, string container, string nombre);
    }
}
