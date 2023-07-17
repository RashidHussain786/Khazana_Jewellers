using System.Collections.Generic;
using System.Threading.Tasks;
using MyShop.Models;

namespace MyShop.Repositories
{
    public interface IJewelleryRepositories
    {
        Task CreateAsync(jewellery entity);
        Task<jewellery> GetByIdAsync(int id);
        Task<List<jewellery>> GetAllAsync();
        Task UpdateAsync(jewellery entity);
        Task DeleteAsync(int id);
    }
}
