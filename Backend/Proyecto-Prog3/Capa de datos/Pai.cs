using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Pai
    {
        public Pai()
        {
            Venta = new HashSet<Venta>();
        }

        public int Id { get; set; }
        public string Descripcion { get; set; }

        public virtual ICollection<Venta> Venta { get; set; }
    }
}
