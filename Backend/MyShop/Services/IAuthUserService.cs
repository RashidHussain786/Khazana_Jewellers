using MyShop.Models;

namespace MyShop.Services
{
    public interface IAuthUserService
    {
        Task SignupAsync(AuthUser authUser);
        Task<AuthUser> LoginAsync(LoginRequest loginRequest);
        string HashPassword(string password);
    }
}
