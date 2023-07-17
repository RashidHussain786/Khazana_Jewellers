using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using MyShop.Models;
using MyShop.Repositories;

namespace MyShop.Services
{
    public class AuthUserService : IAuthUserService
    {
        private readonly IAuthUserRepository _userRepository;

        public AuthUserService(IAuthUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task SignupAsync(AuthUser authUser)
        {
            string hashedPassword = HashPassword(authUser.Password);
            authUser.Password = hashedPassword;
            await _userRepository.CreateUserAsync(authUser);
           
        }

        public async Task<AuthUser> LoginAsync(LoginRequest loginRequest)
        {
            var user = await _userRepository.GetUserByEmailAsync(loginRequest.Email);
            if (user == null)
            {
                // User with the given email does not exist
                throw new ArgumentException("Email does not exit");
            }

            // Hash the password entered by the user
            var hashedPassword = HashPassword(loginRequest.Password);

            // Check if the password matches
            if (user.Password != hashedPassword)
            {
                // Incorrect password
                throw new ArgumentException("Incorrect Password");
            }

            // Password matches, return the user
            return user;
        }


        public string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
        }
    }
}
