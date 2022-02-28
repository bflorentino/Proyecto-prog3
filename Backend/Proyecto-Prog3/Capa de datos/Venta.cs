using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Venta
    {
        public Venta()
        {
            DetalleVenta = new HashSet<DetalleVentum>();
        }

        public int IdVenta { get; set; }
        public DateTime? Fecha { get; set; }
        public decimal? Monto { get; set; }
        public int? IdCliente { get; set; }
        public int? NumTarjeta { get; set; }
        public string FechaVenc { get; set; }
        public int? Cv { get; set; }

        public virtual ICollection<DetalleVentum> DetalleVenta { get; set; }
    }
}
