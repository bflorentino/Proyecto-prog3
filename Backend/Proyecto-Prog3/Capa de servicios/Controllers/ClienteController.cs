using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;

namespace Capa_de_servicios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get()
        {
            using (E_CommerceContext db = new E_CommerceContext())
            {
                var lst = db.Clientes.ToList();
                return Ok(lst);

            }
        }

    }
}
