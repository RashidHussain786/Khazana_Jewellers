using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyShop.Models;
using MyShop.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthUserController : ControllerBase
    {
        private readonly IAuthUserService _authUserService;
        private readonly IConfiguration _configuration;

        public AuthUserController(IAuthUserService authUserService, IConfiguration configuration)
        {
            _authUserService = authUserService;
            _configuration = configuration;
        }

        [HttpPost("signup")]
        [EnableCors("AllowLocalhost")]

        public async Task<IActionResult> Signup(AuthUser authUser)
        {
            try
            {
                await _authUserService.SignupAsync(authUser);
                return Ok(authUser);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        [EnableCors("AllowLocalhost")]

        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            try
            {
                var user = await _authUserService.LoginAsync(loginRequest);

                if (user == null)
                {
                    return Unauthorized(); // Invalid credentials
                }

                // Generate JWT Token
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration.GetValue<string>("Jwt:Key"));
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim(ClaimTypes.Name, user.Name),
                        new Claim(ClaimTypes.Email, user.Email),
                        new Claim(ClaimTypes.Role, user.Role.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddHours(_configuration.GetValue<int>("Jwt:ExpiryInHours")),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                // Return JWT token and role
                return Ok(new { Token = tokenString, Role = user.Role });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
