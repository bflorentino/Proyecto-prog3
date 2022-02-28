using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Libro
    {
        public Libro()
        {
            Calificaciones = new HashSet<Calificacione>();
            DetalleVenta = new HashSet<DetalleVentum>();
        }

        public int IdLibro { get; set; }
        public string Nombre { get; set; }
        public decimal? Precio { get; set; }
        public string Autor { get; set; }
        public DateTime? Año { get; set; }
        public string Editorial { get; set; }
        public int? NumeroPaginas { get; set; }
        public string Idioma { get; set; }
        public int? IdCategoria { get; set; }
        public byte[] Imagen { get; set; }

        public virtual Categorium IdCategoriaNavigation { get; set; }
        public virtual ICollection<Calificacione> Calificaciones { get; set; }
        public virtual ICollection<DetalleVentum> DetalleVenta { get; set; }
    }
}
