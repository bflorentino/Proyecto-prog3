using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capa_de_servicios.Response
{
    public class UserResponse
    {
        public string nombreUsuario { get; set; }
        public string Token { get; set; }

        public int? IdRol { get; set; }

    }
}
