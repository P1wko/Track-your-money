using Microsoft.AspNetCore.Mvc;
using tym_backend.Models;

namespace tym_backend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class MealController : Controller
	{
		private readonly backendContext _context;

		public MealController(backendContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
			return Ok("Test");
		}


	}
}
