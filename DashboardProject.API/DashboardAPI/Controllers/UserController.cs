using DashboardAPI.Data;
using DashboardAPI.DTOs;
using DashboardAPI.DTOs.USR;
using DashboardAPI.Helpers;
using DashboardAPI.Models.USR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace DashboardAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtTokenGenerator _tokenGenerator;


        public UserController(AppDbContext context,
            JwtTokenGenerator jwtTokenGenerator)
        {
            _context = context;
            _tokenGenerator = jwtTokenGenerator;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup(RegisterDTO dto)
        {
            if (_context.Users.Any(u => u.Email == dto.Email))
            {
                return BadRequest("ایمیل قبلاً ثبت شده است");
            }

            string hashedPassword = HashPassword(dto.Password);

            var user = new User
            {
                Username = dto.Username,
                Email = dto.Email,
                PasswordHash = hashedPassword,
                IsActive = true,
                CreatedAt = DateTime.Now
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("ثبت‌نام با موفقیت انجام شد");
        }

        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha256.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }

        [HttpPost("signin")]
        public async Task<IActionResult> Signin([FromBody] SigninDTO dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u =>
                u.Email == dto.Email && u.PasswordHash == HashPassword(dto.Password));

            if (user == null)
            {
                return Unauthorized("نام کاربری یا رمز عبور نادرست است");
            }

            var token = _tokenGenerator.GenerateToken(user);

            Response.Cookies.Append("access_token", token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.UtcNow.AddHours(8)
            });

            return Ok(new { message = "ورود موفقیت‌آمیز بود", username = user.Username, token = token });
        }

        [HttpGet("checkAuth")]
        [Authorize]
        public IActionResult CheckAuth()
        {
            return Ok(new { isAuthenticated = true });
        }


    }
}
