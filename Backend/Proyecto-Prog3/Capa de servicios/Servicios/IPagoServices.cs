using System;
using System.Collections.Generic;
using System.Linq;
using Capa_de_servicios.Response;
using Capa_de_servicios.Modelos;
using System.Threading.Tasks;

namespace Capa_de_servicios.Servicios
{
     public interface IPagoServices
    {
        public Task<Respuestas> PayBook(PagoBinding pago);

        public Task<Respuestas> GetCountry();

        public Task<Respuestas> GetFactura(string nombreUsuario);

        public Task<Respuestas> GetItems(string codigoFactura);
    }
}
