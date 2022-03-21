using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Cliente
    {
        public Cliente()
        {
            Calificaciones = new HashSet<Calificacione>();
            Venta = new HashSet<Venta>();
        }

        public string NombreUsuario { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string CorreoElectronico { get; set; }
        public string Direccion { get; set; }

        public virtual Usuario Usuario { get; set; }
        public virtual ICollection<Calificacione> Calificaciones { get; set; }
        public virtual ICollection<Venta> Venta { get; set; }
    }
}
