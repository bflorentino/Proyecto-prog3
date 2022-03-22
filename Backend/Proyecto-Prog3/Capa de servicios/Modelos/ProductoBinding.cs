using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capa_de_servicios.Modelos
{
    public class ProductoBinding
    {
        [Required]
        public int Idlibro { get; set; }

        [Required]
        public int Cantidad { get; set; }

        [Required]
        public double Monto { get; set; }


    }
}
