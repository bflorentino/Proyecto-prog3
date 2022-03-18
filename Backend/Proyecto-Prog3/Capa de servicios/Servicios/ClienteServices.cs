using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Modelos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Tools;

namespace Capa_de_servicios.Servicios
{
    public class ClienteServices: IClienteServices
    {
        private readonly E_CommerceContext _context;

        public ClienteServices(E_CommerceContext context)
        {
            _context = context;
        }

        public async Task<Respuestas> AddCliente(ClienteBinding cliente)
        {
            var respuesta = new Respuestas();

            var client = new Cliente
            {
                Nombre = cliente.Nombre,
                NombreUsuario = cliente.NombreUsuario,
                Telefono = cliente.Telefono,
                Apellido = cliente.Apellido,
                Direccion = cliente.Direccion,
                CorreoElectronico = cliente.CorreoElectronico

            };
            var user = new Usuario
            {
                NombreUsuario = cliente.NombreUsuario,
                Contraseña = Encriptacion.GetSHA256(cliente.Contraseña),
                IdRol = 1
            };

            await _context.Clientes.AddAsync(client);
            await _context.Usuarios.AddAsync(user);
            await _context.SaveChangesAsync();

            respuesta.Mensaje = "El cliente ha sido agregado correctamente";
            return respuesta;
        }
    }
}