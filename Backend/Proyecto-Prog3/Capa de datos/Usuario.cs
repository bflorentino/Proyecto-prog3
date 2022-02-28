using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Usuario
    {
        public string NombreUsuario { get; set; }
        public string Contraseña { get; set; }
        public int? IdRol { get; set; }

        public virtual Role IdRolNavigation { get; set; }
        public virtual Cliente NombreUsuarioNavigation { get; set; }
    }
}
