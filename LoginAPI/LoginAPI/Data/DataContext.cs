using LoginAPI.models;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Registro> Registros { get; set; }
    }
}
