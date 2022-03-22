using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_datos;
using Capa_de_servicios.Response;
using Capa_de_servicios.Modelos;


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
            Respuestas orespuesta = new Respuestas();

            decimal monto_Total = 0;

            foreach (var producto in pago.Carrito) 
            {
                monto_Total =+ (decimal)producto.Monto;
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
                Cv = pago.Cv

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
                    Precio = (decimal)producto.Monto
                 };
                await _context.DetalleVenta.AddAsync(detalle);

            }

            await _context.SaveChangesAsync();

            orespuesta.Mensaje = " Su pago ha sido realizado con exito ";
            orespuesta.Exito = 1;

            return orespuesta;

        }



    }
}
