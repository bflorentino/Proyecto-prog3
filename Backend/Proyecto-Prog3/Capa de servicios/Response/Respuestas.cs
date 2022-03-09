using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Response
{
    public class Respuestas<T>
    {
        public int Exito {get; set;}
        public string Mensaje { get; set; }
        public object Data { get; set; }


    }
}
