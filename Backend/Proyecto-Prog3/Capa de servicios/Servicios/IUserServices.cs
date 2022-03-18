using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Request;
using Capa_de_servicios.Response;

namespace Capa_de_servicios.Servicios
{
      public interface  IUserServices
    {
        public Task <UserResponse> Auth(AuthRequest model);
    }
}
