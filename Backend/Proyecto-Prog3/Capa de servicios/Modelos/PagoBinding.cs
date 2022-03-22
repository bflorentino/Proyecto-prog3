using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Modelos
{
    public class PagoBinding
    {
        public string CodigoFactura { get; set; }
        public DateTime? Fecha { get; set; }
        public decimal? Monto { get; set; }
        public string NombreUsuario { get; set; }
        public string NumTarjeta { get; set; }
        public string FechaVenc { get; set; }
        public int Cv { get; set; }
        public List<ProductoBinding> Carrito {get; set;}




    }
}
