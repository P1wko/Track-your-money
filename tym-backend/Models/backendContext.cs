using Microsoft.EntityFrameworkCore;

namespace tym_backend.Models
{
	public class backendContext : DbContext
	{
		public backendContext(DbContextOptions<backendContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Transaction>().HasData(
				[new Transaction { Id = 1, Title = "First transaction", IsExpense = true, TransactionDate = new DateTime(2024, 2, 23) }, new Transaction { Id = 2, Title = "Second transaction", IsExpense = false, TransactionDate = new DateTime(2023, 4, 26) }]);
			base.OnModelCreating(modelBuilder);
		}


		public DbSet<Transaction> Transactions { get; set; }
	}
}
