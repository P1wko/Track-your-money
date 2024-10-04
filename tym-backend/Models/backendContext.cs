using Microsoft.EntityFrameworkCore;

namespace tym_backend.Models
{
	public class backendContext : DbContext
	{
		public backendContext(DbContextOptions<backendContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}


		public DbSet<Meal> Meals { get; set; }
	}
}
