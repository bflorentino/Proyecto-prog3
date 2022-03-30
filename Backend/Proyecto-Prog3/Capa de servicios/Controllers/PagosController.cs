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
    public class PagosController : ControllerBase
    {
        private readonly IPagoServices _PagoServices;

        public PagosController(IPagoServices PagoServices)
        {

            _PagoServices = PagoServices;

        }

        [HttpPost]
        public async Task<ActionResult> PayBook(PagoBinding pago) 
        {
            return Ok(await _PagoServices.PayBook(pago));
        }

        [HttpGet]
        public async Task<ActionResult> GetCountry()
        {
            return Ok(await _PagoServices.GetCountry());
        }

    }
}
