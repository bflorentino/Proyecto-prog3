using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class DetalleVentum
    {
        public int IdDetalleVenta { get; set; }
        public int? IdVenta { get; set; }
        public int? Idlibro { get; set; }
        public int? Cantidad { get; set; }

        public virtual Venta IdVentaNavigation { get; set; }
        public virtual Libro IdlibroNavigation { get; set; }
    }
}
