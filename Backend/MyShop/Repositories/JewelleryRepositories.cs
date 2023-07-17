using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyShop.Data;
using MyShop.Models;

namespace MyShop.Repositories
{
    public class JewelleryRepositories : IJewelleryRepositories
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<jewellery> _entities;

        public JewelleryRepositories(ApplicationDbContext context)
        {
            _context = context;
            _entities = _context.Set<jewellery>();
        }

        public async Task CreateAsync(jewellery entity)
        {
            await _entities.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<jewellery> GetByIdAsync(int id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task<List<jewellery>> GetAllAsync()
        {
            return await _entities.ToListAsync();
        }

        public async Task UpdateAsync(jewellery entity)
        {
            _entities.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _entities.FindAsync(id);
            if (entity != null)
            {
                _entities.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
