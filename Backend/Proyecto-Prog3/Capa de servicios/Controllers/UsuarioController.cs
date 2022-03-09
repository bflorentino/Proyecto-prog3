using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Request;
using Capa_de_servicios.Servicios;
using Microsoft.Extensions.DependencyInjection;

namespace Capa_de_servicios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
         private IUserServices _UserServices;


         public UsuarioController(IUserServices userServices) 
        {

            _UserServices = userServices;
        
        }

        [HttpPost("login")]
        public async Task <IActionResult> Autentificar([FromBody] AuthRequest model) 
        {

            Respuestas<UserResponse> respuesta = new Respuestas<UserResponse>();
            //Respuestas respuesta = new Respuestas();
            var userresponse = await _UserServices.Auth(model);
            if (userresponse == null)
            {
                respuesta.Exito = 0;
                respuesta.Mensaje = "Usuario o contraseña incorrecta";

                return BadRequest(respuesta);
            }

            respuesta.Exito = 1;
            respuesta.Data = userresponse;

            return Ok(respuesta);
        } 
            
    }    

}


            

       
        
            
            
        
    

