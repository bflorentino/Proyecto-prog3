using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class DetalleVentum
    {
        public string CodigoDetalle { get; set; }
        public string CodigoFactura { get; set; }
        public int Idlibro { get; set; }
        public int Cantidad { get; set; }
        public int Precio { get; set; }

        public virtual Venta CodigoFacturaNavigation { get; set; }
        public virtual Libro IdlibroNavigation { get; set; }
    }
}
