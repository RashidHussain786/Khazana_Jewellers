using MyShop.Models;

namespace MyShop.Repositories
{
    public interface IAuthUserRepository
    {
        Task<AuthUser> GetUserByEmailAsync(string email);
        Task CreateUserAsync(AuthUser user);
    }
}
