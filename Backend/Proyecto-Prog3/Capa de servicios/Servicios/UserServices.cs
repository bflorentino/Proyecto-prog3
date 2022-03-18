using Capa_de_datos;
using Capa_de_servicios.Request;
using Capa_de_servicios.Response;
using Capa_de_servicios.Tools;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Common;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace Capa_de_servicios.Servicios
{
    public class UserServices : IUserServices
    {
        private readonly Appsetings _appsetings;

        public UserServices(IOptions<Appsetings> appsettings)
        {
            _appsetings = appsettings.Value;
        }

        public async Task  <UserResponse> Auth(AuthRequest usuario)
        {
            UserResponse userResponse = new UserResponse();
            using (var db = new E_CommerceContext())
            {
                string spassword = Encriptacion.GetSHA256(usuario.contraseña);

                var Usuario  = await db.Usuarios.Where(d => d.NombreUsuario == usuario.NombreUsuario &&
                                                    d.Contraseña == spassword).FirstOrDefaultAsync();
                if (Usuario == null) return null;

                userResponse.nombreUsuario = Usuario.NombreUsuario;
                userResponse.Token = GetToken(Usuario);
                userResponse.IdRol = Usuario.IdRol;
            }
            return userResponse;   
        }

        private string GetToken(Usuario usuario)
        {
            var tokenHandeler = new JwtSecurityTokenHandler();
            var llave = Encoding.ASCII.GetBytes(_appsetings.secreto);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                      new Claim(ClaimTypes.NameIdentifier,usuario.IdRol.ToString()),
                      new Claim(ClaimTypes.Name , usuario.NombreUsuario)
                    }
                    ),
                Expires = DateTime.UtcNow.AddDays(90),
                SigningCredentials =  new SigningCredentials(new SymmetricSecurityKey(llave), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandeler.CreateToken(tokenDescriptor);
            return tokenHandeler.WriteToken(token);
        }
    }
}