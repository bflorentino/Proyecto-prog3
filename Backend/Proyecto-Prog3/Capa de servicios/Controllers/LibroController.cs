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
using Capa_de_servicios.Modelos;
using System.IO;

namespace Capa_de_servicios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {

        private readonly ILibroServices _libroServices;
        private readonly IAlmacenamientoServices almacenamiento;


        public LibroController(ILibroServices librosServices, IAlmacenamientoServices almacenamientoServices)
        {

            _libroServices = librosServices;
            almacenamiento = almacenamientoServices;

        } 

        // Obtener los datos de los Libros
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            return Ok(await _libroServices.Getbooks());

        }

       

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] LibroBinding libro)
        {

            if (libro.Foto != null)
            {
                libro.RutaFoto = await GuardarFoto(libro.Foto);
            }
            return Ok( await _libroServices.AddLibro(libro));
        }

        private async Task<string> GuardarFoto(IFormFile foto)
        {
            var stream = new MemoryStream();
            await foto.CopyToAsync(stream);

            var filebytes = stream.ToArray();

            return await almacenamiento.CrearFoto(filebytes, foto.ContentType, Path.GetExtension(foto.FileName), "Libro", Guid.NewGuid().ToString());
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
    

