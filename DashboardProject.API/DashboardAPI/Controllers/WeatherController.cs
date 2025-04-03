using DashboardAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DashboardAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WeatherController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("getEnglishCityName")]
        public async Task<IActionResult> GetEnglishCityName([FromQuery] string farsiName)
        {
            if (string.IsNullOrWhiteSpace(farsiName))
                return BadRequest("نام فارسی شهر الزامی است");

            var cities = await _context.CityInfos
                .FirstOrDefaultAsync(city => city.CityFarsiName == farsiName);

            if (cities == null)
                return NotFound("شهر مورد نظر یافت نشد");

            return Ok(new { cities.CityAscii });
        }
    }
}
