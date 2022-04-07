using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Modelos;
using Microsoft.EntityFrameworkCore;

namespace Capa_de_servicios.Servicios
{
    public class PagoServices : IPagoServices
    {
        private readonly E_CommerceContext _context;

        public PagoServices(E_CommerceContext context)
        {
            _context = context;
        }   

        public async Task<Respuestas> PayBook(PagoBinding pago ) 
        
        {
            try
            {
                Respuestas orespuesta = new Respuestas();

                decimal monto_Total = 0;

                foreach (var producto in pago.Carrito)
                {
                    monto_Total += (decimal)producto.Monto;
                }

                pago.CodigoFactura = Guid.NewGuid().ToString();
                pago.Monto = monto_Total;

                Venta ventas = new Venta
                {
                    CodigoFactura = pago.CodigoFactura,
                    Monto = (decimal)pago.Monto,
                    NombreUsuario = pago.NombreUsuario,
                    NumTarjeta = pago.NumTarjeta,
                    FechaVenc = pago.FechaVenc,
                    Cv = pago.Cv,
                    IdPais = pago.idPais
                };

                await _context.Ventas.AddAsync(ventas);

                foreach (var producto in pago.Carrito)
                {

                    DetalleVentum detalle = new DetalleVentum
                    {
                        CodigoDetalle = Guid.NewGuid().ToString(),
                        CodigoFactura = pago.CodigoFactura,
                        Idlibro = producto.Idlibro,
                        Cantidad = producto.Cantidad,
                        Precio = (int)producto.Monto

                    };
                    await _context.DetalleVenta.AddAsync(detalle);

                }

                await _context.SaveChangesAsync();

                orespuesta.Mensaje = " Su pago ha sido realizado con exito ";
                orespuesta.Exito = 1;

                return orespuesta;
            }
            catch(Exception ex) 
            {
                var respuesta = new Respuestas();
                respuesta.Data = 0;
                respuesta.Mensaje = "Ha ocurrido un error el error es :"  + ex.Message;
                return respuesta;
            }
        }

        public async Task<Respuestas> GetCountry() 
        {
            try
            {

                Respuestas orespuesta = new Respuestas();

                var paises = await (from pais in _context.Pais
                                    select new PaisesViewModelcs
                                    {
                                        ID = pais.Id,
                                        Descripcion = pais.Descripcion

                                    }).ToListAsync();

                orespuesta.Data = paises;

                return orespuesta;
            }
            catch (Exception ex)
            {
                var respuesta = new Respuestas();
                respuesta.Data = 0;
                respuesta.Mensaje = "Ha ocurrido un error el error es :" + ex.Message;
                return respuesta;
            }

        }

        public async Task<Respuestas> GetFactura(string nombreUsuario)
        {
            try
            {
                Respuestas respuesta = new Respuestas();

                var historialFactura = await (from historia in _context.Ventas
                                              where historia.NombreUsuario == nombreUsuario
                                              orderby (historia.Fecha)
                                              select new FacturaViewModel
                                              {
                                                  Fecha = historia.Fecha.ToString("dd/MM/yy"),
                                                  Monto = historia.Monto,
                                                  CodigoFactura = historia.CodigoFactura
                                              }).ToListAsync();

                respuesta.Data = historialFactura;
                respuesta.Exito = 1;
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

        public async Task<Respuestas> GetItems(string codigoFactura)
        {
            try
            {
                Respuestas respuesta = new Respuestas();
                var items = await (from detalles in _context.DetalleVenta
                                   join nombre in _context.Libros
                                   on detalles.Idlibro equals nombre.IdLibro
                                   where detalles.CodigoFactura == codigoFactura
                                   select new ItemsViewModel
                                   {
                                       NombreLibro = nombre.Nombre,
                                       Idlibro = detalles.Idlibro,
                                       Cantidad = detalles.Cantidad,
                                       Precio = detalles.Precio
                                   }).ToListAsync();

                respuesta.Data = items;
                respuesta.Exito = 1;
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
