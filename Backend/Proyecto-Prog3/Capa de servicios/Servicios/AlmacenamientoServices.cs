using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace Capa_de_servicios.Servicios
{
    public class AlmacenamientoServices: IAlmacenamientoServices
    {

        private readonly IWebHostEnvironment _env;
        private readonly IHttpContextAccessor _contextAccessor;

        public AlmacenamientoServices(IWebHostEnvironment env, IHttpContextAccessor accesor)
        {
            _env = env;
            _contextAccessor = accesor;
        }

        public async Task<string> CrearFoto(byte[] file, string contentType, string extension, string container, string nombre)
        {
            string webPath = _env.WebRootPath;
            string carpeta = Path.Combine(webPath, container);
            string nombreFinal = $"{nombre}{extension}";
            string rutaCompleta = Path.Combine(carpeta, nombreFinal);
            await File.WriteAllBytesAsync(rutaCompleta, file);

            string urlActual = $"{_contextAccessor.HttpContext.Request.Scheme}: //{_contextAccessor.HttpContext.Request.Host}";
            string dbUrl = Path.Combine(urlActual, container, nombreFinal).Replace("\\", "/");

            return dbUrl;
        }

    }
}
