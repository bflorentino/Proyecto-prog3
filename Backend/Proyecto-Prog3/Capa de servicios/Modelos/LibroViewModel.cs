using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Modelos
{
    public class LibroViewModel
    {

        public int Idlibro { get; set; }
        public string Nombre { get; set; }
        public decimal? Precio { get; set; }
        public string Autor { get; set; }
        public string Anio { get; set; }
        public string Editorial { get; set; }
        public int? NumeroPaginas { get; set; }
        public string Idioma { get; set; }
        public int? IdCategoria { get; set; }
        public string RutaFoto { get; set; }
        public string Categoria { get; set; }
        public bool? EnVenta { get; set; }
        public int CantidadCalificado { get; set; }
        public double PromedioCalificacion { get; set; }
        public bool PermisoCalificaar { get; set; }

    }
}
