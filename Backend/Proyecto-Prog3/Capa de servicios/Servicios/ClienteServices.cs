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
            try { 
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
            catch (Exception ex)
            {
                var respuesta = new Respuestas();
                respuesta.Data = 0;
                respuesta.Mensaje = "Ha ocurrido un error el error es :" + ex.Message;
                return respuesta;
            }
        }

        public async Task<Respuestas> EditPassword(EditarPssBinding cliente)
        {
            try { 
            var respuesta = new Respuestas();

                Usuario user = await _context.Usuarios.FindAsync(cliente.NombreUsuario);

                if (user.Contraseña == Encriptacion.GetSHA256(cliente.CurrentPassword))
                {

                    user.Contraseña = Encriptacion.GetSHA256(cliente.NewPassword);
                    respuesta.Mensaje = "Contraseña cambiada con exito!!!";

                    _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    await _context.SaveChangesAsync();

                    respuesta.Exito = 1;
                }
                else
                {
                    respuesta.Mensaje = "Contraseña incorrecta!!!";
                    respuesta.Exito = 0;
                }
                return respuesta;
            
            }
            catch (Exception ex)
            {
                var respuesta = new Respuestas();
                respuesta.Data = 0;
                respuesta.Mensaje = "Ha ocurrido un error el error es :" + ex.Message;
                return respuesta;
            }
        }
    }
}