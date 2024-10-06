namespace tym_backend.Models
{
	public class Transaction
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public DateTime TransactionDate { get; set; }
		public bool IsExpense { get; set; } = true;

	}
}
