using System;
using System.Collections.Generic;

#nullable disable

namespace Capa_de_datos
{
    public partial class Categorium
    {
        public Categorium()
        {
            Libros = new HashSet<Libro>();
        }

        public int IdCategoria { get; set; }
        public string CategoriaLibro { get; set; }

        public virtual ICollection<Libro> Libros { get; set; }
    }
}
