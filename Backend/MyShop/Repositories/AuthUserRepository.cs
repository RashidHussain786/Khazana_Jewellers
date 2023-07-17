using Microsoft.EntityFrameworkCore;
using MyShop.Data;
using MyShop.Models;

namespace MyShop.Repositories
{
    public class AuthUserRepository:IAuthUserRepository
    {
        private readonly ApplicationDbContext _context;
        public AuthUserRepository(ApplicationDbContext context)
        {
                _context = context;
        }
        public async Task<AuthUser> GetUserByEmailAsync(string email)
        {
            return await _context.AuthUsers.SingleOrDefaultAsync(u => u.Email == email);
        }

        public async Task CreateUserAsync(AuthUser user)
        {
            await _context.AuthUsers.AddAsync(user);
            await _context.SaveChangesAsync();
        }

    }
}
