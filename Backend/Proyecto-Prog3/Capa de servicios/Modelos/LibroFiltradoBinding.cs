using System.Collections.Generic;
namespace Capa_de_servicios.Modelos

{
    public class LibroFiltradoBinding
    {
        public List<int?> Genero { get; set; }
        public int Precio { get; set; } = 0;
        public int Calificacion { get; set; }
        public int Idioma { get; set; }
        public List<LibroViewModel> Libros { get; set; }
    }
}
