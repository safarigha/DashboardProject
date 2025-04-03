using Microsoft.EntityFrameworkCore;
using DashboardAPI.Models.USR;
using DashboardAPI.Models.WTH;

namespace DashboardAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<CityInfo> CityInfos { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users", schema: "USR");
            modelBuilder.Entity<CityInfo>().ToTable("CityInfo", schema: "WTH");


            base.OnModelCreating(modelBuilder);
        }
    }
}
