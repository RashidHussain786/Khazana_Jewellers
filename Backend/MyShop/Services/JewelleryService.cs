using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyShop.Models;
using MyShop.Repositories;

namespace MyShop.Services
{
    public class JewelleryService : IJewelleryService
    {
        private readonly IJewelleryRepositories _jewelleryRepository;

        public JewelleryService(IJewelleryRepositories jewelleryRepository)
        {
            _jewelleryRepository = jewelleryRepository;
        }

        public async Task CreateAsync(jewellery entity)
        {
            ValidateJewellery(entity);
            await _jewelleryRepository.CreateAsync(entity);
        }

        public async Task<jewellery> GetByIdAsync(int id)
        {
            return await _jewelleryRepository.GetByIdAsync(id);
        }

        public async Task<List<jewellery>> GetAllAsync()
        {
            return await _jewelleryRepository.GetAllAsync();
        }

        public async Task UpdateAsync(jewellery entity)
        {
            ValidateJewellery(entity);
            var id=entity.Id;
            var existingJewellery = await _jewelleryRepository.GetByIdAsync(id);
            if (existingJewellery == null)
            {
                throw new ArgumentException($"Jewellery with ID {id} not found.");
            }

            existingJewellery.Name = entity.Name;
            existingJewellery.Material = entity.Material;
            existingJewellery.Description = entity.Description;
            existingJewellery.Weight = entity.Weight;

            await _jewelleryRepository.UpdateAsync(existingJewellery);
           
        }

        public async Task DeleteAsync(int id)
        {
            await _jewelleryRepository.DeleteAsync(id);
        }

        private void ValidateJewellery(jewellery entity)
        {
            if (string.IsNullOrEmpty(entity.Name))
            {
                throw new ArgumentException("Jewellery name cannot be empty.");
            }

            if (entity.Weight <= 0)
            {
                throw new ArgumentException("Jewellery price must be greater than zero.");
            }

            // Add more business logic or validation rules as needed
        }
    }
}
