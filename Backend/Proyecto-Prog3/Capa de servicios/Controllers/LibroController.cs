using Capa_de_datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Request;
using Capa_de_servicios.Response;
using Capa_de_servicios.Servicios;

namespace Capa_de_servicios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {

        private ILibroServices _libroServices;


        public LibroController(ILibroServices librosServices)
        {

            _libroServices = librosServices;

        }

        // Obtener los datos de los Libros
        [HttpGet]
        public async Task<IActionResult> Get()
        {



            return Ok(await _libroServices.Getbooks());



        }

        // Editar libro 

        [HttpPut]
        public async Task<IActionResult> Edit(LibroRequest omodel)
        {

            return Ok(await _libroServices.EditBooks(omodel));

        }

        [HttpGet("{iD}")]
        public  async Task <IActionResult> GetID(LibroRequest omodel)
        {
           
                return Ok(await _libroServices.GetbookByID(omodel));

            
        }

    }
}
    

