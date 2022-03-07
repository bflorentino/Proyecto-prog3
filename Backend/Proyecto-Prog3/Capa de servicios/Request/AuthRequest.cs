using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capa_de_servicios.Request
{
    public class AuthRequest
    {
        [Required]
        public string NombreUsuario { get; set; }

        [Required]
        public string contraseña { get; set; }

    }
}
