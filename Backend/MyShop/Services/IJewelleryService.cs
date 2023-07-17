using MyShop.Models;

namespace MyShop.Services
{
    public interface IJewelleryService
    {
        Task CreateAsync(jewellery entity);
        Task<jewellery> GetByIdAsync(int id);
        Task<List<jewellery>> GetAllAsync();
        Task UpdateAsync(jewellery entity);
        Task DeleteAsync(int id);
    }
}
