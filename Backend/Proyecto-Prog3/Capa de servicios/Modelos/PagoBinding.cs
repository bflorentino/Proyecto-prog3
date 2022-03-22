using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capa_de_servicios.Modelos
{
    public class PagoBinding
    {

        public string CodigoFactura { get; set; }
        public DateTime? Fecha { get; set; }
        public decimal? Monto { get; set; }

        [Required]
        public string NombreUsuario { get; set; }

        [Required]
        [StringLength (10, MinimumLength =10)]
        [RegularExpression ("[0-9]{10}",ErrorMessage ="Tarjeta Invalida")]
        public string NumTarjeta { get; set; }

        [Required]
        public string FechaVenc { get; set; }

        [Required]
        [RegularExpression("[0-9]{3}", ErrorMessage = "Cv Invalido")]
        public int Cv { get; set; }

        [Required]
        public List<ProductoBinding> Carrito {get; set;}


    }
}
