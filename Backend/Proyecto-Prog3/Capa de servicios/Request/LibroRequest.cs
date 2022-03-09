using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Request
{
    public class LibroRequest
    {
        public string Nombre { get; set; }

        public int idLibro { get; set; }

        public decimal? Precio { get; set; }
        public string Autor { get; set; }
        public DateTime? Año { get; set; }
        public string Editorial { get; set; }
        public int? NumeroPaginas { get; set; }
        public string Idioma { get; set; }
        public int? IdCategoria { get; set; }
        public byte[] Imagen { get; set; }



    }
}
