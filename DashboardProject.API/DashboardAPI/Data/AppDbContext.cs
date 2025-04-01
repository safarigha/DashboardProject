using Microsoft.EntityFrameworkCore;
using DashboardAPI.Models.USR;

namespace DashboardAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users", schema: "USR");

            base.OnModelCreating(modelBuilder);
        }
    }
}
