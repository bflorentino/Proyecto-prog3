using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Calificacione
    {
        public int IdCalificacion { get; set; }
        public int? IdLibro { get; set; }
        public string NombreUsuario { get; set; }
        public int? Calificación { get; set; }

        public virtual Libro IdLibroNavigation { get; set; }
        public virtual Cliente NombreUsuarioNavigation { get; set; }
    }
}
