using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Servicios;
using Capa_de_servicios.Modelos;

namespace Capa_de_servicios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteServices _clienteServices;

        public ClienteController(IClienteServices clienteServices)
        {
            _clienteServices = clienteServices;
        }

        [HttpPost]
        public async Task<ActionResult>Post(ClienteBinding cliente)
        {
            return Ok(await _clienteServices.AddCliente(cliente));
        }

        [HttpPut("Editar Contraseña")]
        public async Task<ActionResult> EditPassword(ClienteBinding cliente)
        {
            return Ok(await _clienteServices.EditPassword(cliente));
        }
    }
}