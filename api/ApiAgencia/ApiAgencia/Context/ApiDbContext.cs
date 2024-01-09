using ApiAgenciaRRR.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiAgencia.Context
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<Promocao> Promocaos { get; set; }

    }

}

