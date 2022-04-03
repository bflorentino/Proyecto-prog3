using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Modelos;
using Capa_de_servicios.Response;

namespace Capa_de_servicios.Servicios
{
   public interface IClienteServices
    {
        Task<Respuestas> AddCliente(ClienteBinding cliente);
        Task<Respuestas> EditPassword(ClienteBinding cliente);
    }
}
