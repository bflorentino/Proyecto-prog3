using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Capa_de_datos
{
    public partial class E_CommerceContext : DbContext
    {
        public E_CommerceContext()
        {
        }

        public E_CommerceContext(DbContextOptions<E_CommerceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Calificacione> Calificaciones { get; set; }
        public virtual DbSet<Categorium> Categoria { get; set; }
        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<DetalleVentum> DetalleVenta { get; set; }
        public virtual DbSet<Libro> Libros { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Venta> Ventas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=db-prog3.database.windows.net;Database=E_Commerce;User ID=Project-Server;Password=1A.z23ser2ver3db.Az;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Calificacione>(entity =>
            {
                entity.HasKey(e => e.IdCalificacion)
                    .HasName("PK__Califica__E056358FD66DEBC4");

                entity.Property(e => e.IdCalificacion).HasColumnName("idCalificacion");

                entity.Property(e => e.IdLibro).HasColumnName("idLibro");

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nombreUsuario");

                entity.HasOne(d => d.IdLibroNavigation)
                    .WithMany(p => p.Calificaciones)
                    .HasForeignKey(d => d.IdLibro)
                    .HasConstraintName("FK_Calificaciones_Libros");

                entity.HasOne(d => d.NombreUsuarioNavigation)
                    .WithMany(p => p.Calificaciones)
                    .HasForeignKey(d => d.NombreUsuario)
                    .HasConstraintName("FK_Calificaciones_Clientes");
            });

            modelBuilder.Entity<Categorium>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PK__categori__A3C02A10090E9B75");

                entity.ToTable("categoria");

                entity.Property(e => e.CategoriaLibro)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("Categoria_Libro");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.NombreUsuario)
                    .HasName("PK__Clientes__A0436BD691C3BDB5");

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nombreUsuario");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CorreoElectronico)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Direccion).IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DetalleVentum>(entity =>
            {
                entity.HasKey(e => e.IdDetalleVenta)
                    .HasName("PK__Detalle___0C2BD9A7ECAC89A5");

                entity.ToTable("Detalle_Venta");

                entity.Property(e => e.IdDetalleVenta).HasColumnName("IdDetalle_Venta");

                entity.HasOne(d => d.IdVentaNavigation)
                    .WithMany(p => p.DetalleVenta)
                    .HasForeignKey(d => d.IdVenta)
                    .HasConstraintName("FK_Detalle_Venta_Ventas");

                entity.HasOne(d => d.IdlibroNavigation)
                    .WithMany(p => p.DetalleVenta)
                    .HasForeignKey(d => d.Idlibro)
                    .HasConstraintName("FK_Detalle_Venta_Libros");
            });

            modelBuilder.Entity<Libro>(entity =>
            {
                entity.HasKey(e => e.IdLibro)
                    .HasName("PK__Libros__5BC0F026252E2602");

                entity.Property(e => e.IdLibro).HasColumnName("idLibro");

                entity.Property(e => e.Autor)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Año).HasColumnType("date");

                entity.Property(e => e.Editorial).IsUnicode(false);

                entity.Property(e => e.Idioma)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Precio).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.RutaFoto)
                    .IsUnicode(false)
                    .HasColumnName("rutaFoto");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Libros)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK_Libros_categoria");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.IdRol)
                    .HasName("PK__roles__3C872F76A38C74A1");

                entity.ToTable("roles");

                entity.Property(e => e.IdRol).HasColumnName("idRol");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.NombreUsuario)
                    .HasName("PK__Usuarios__A0436BD65568D9ED");

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nombreUsuario");

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("contraseña");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdRol)
                    .HasConstraintName("FK_Usuarios_roles");

                entity.HasOne(d => d.NombreUsuarioNavigation)
                    .WithOne(p => p.Usuario)
                    .HasForeignKey<Usuario>(d => d.NombreUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Usuarios_Clientes");
            });

            modelBuilder.Entity<Venta>(entity =>
            {
                entity.HasKey(e => e.IdVenta)
                    .HasName("PK__Ventas__BC1240BDB64C88EE");

                entity.Property(e => e.Cv).HasColumnName("CV");

                entity.Property(e => e.Fecha).HasColumnType("date");

                entity.Property(e => e.FechaVenc)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("Fecha_Venc");

                entity.Property(e => e.Monto).HasColumnType("decimal(18, 0)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
