using Microsoft.EntityFrameworkCore;
using MyShop.Models;

namespace MyShop.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options) { }
        
        public DbSet<jewellery> Jewelleries { get; set; }
        public DbSet<AuthUser> AuthUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<jewellery>().HasKey(jewellery => jewellery.Id);
            modelBuilder.Entity<jewellery>().Property(jewellery=>jewellery.Name).HasMaxLength(100);
            modelBuilder.Entity<jewellery>().Property(jewellery => jewellery.Material).HasMaxLength(200);
            modelBuilder.Entity<jewellery>().Property(jewellery => jewellery.Description).HasMaxLength(700);


            base.OnModelCreating(modelBuilder);
        }


    }
}
