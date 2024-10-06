using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tym_backend.Models;

namespace tym_backend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TransactionController : Controller
	{
		private readonly backendContext _context;

		public TransactionController(backendContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult> Get()
		{
			var items = await _context.Transactions.ToListAsync();
			return Ok(items);
		}
	}
}
