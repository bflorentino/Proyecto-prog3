using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Modelos
{
    public class FacturaViewModel
    {
        public string CodigoFactura { get; set; }
        public string Fecha { get; set; }
        public decimal Monto { get; set; }
    }
}
