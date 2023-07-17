using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyShop.Models;
using MyShop.Services;

namespace MyShop.Controllers
{
    [ApiController]
    [Route("api/jewellery")]
    public class JewelleryController : ControllerBase
    {
        private readonly IJewelleryService _jewelleryService;

        public JewelleryController(IJewelleryService jewelleryService)
        {
            _jewelleryService = jewelleryService;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [EnableCors("AllowLocalhost")]
        public async Task<IActionResult> CreateJewellery([FromBody] jewellery entity)
        {
            try
            {
                await _jewelleryService.CreateAsync(entity);
                return Ok("Jewellery created successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to create jewellery: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        [EnableCors("AllowLocalhost")]
        public async Task<IActionResult> GetJewelleryById(int id)
        {
            try
            {
                var jewellery = await _jewelleryService.GetByIdAsync(id);
                if (jewellery == null)
                {
                    return NotFound();
                }

                return Ok(jewellery);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve jewellery: {ex.Message}");
            }
        }

        [HttpGet]
        [EnableCors("AllowLocalhost")]
        public async Task<IActionResult> GetAllJewellery()
        {
            try
            {
                var jewelleryList = await _jewelleryService.GetAllAsync();
                return Ok(jewelleryList);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve jewellery: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles ="Admin")]
        [EnableCors("AllowLocalhost")]
        public async Task<IActionResult> UpdateJewellery(int id, [FromBody] jewellery entity)
        {
            try
            {
                var existingJewellery = await _jewelleryService.GetByIdAsync(id);
                if (existingJewellery == null)
                {
                    return NotFound();
                }
                entity.Id = id;
                await _jewelleryService.UpdateAsync(entity);
                return Ok("Jewellery updated successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to update jewellery: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        [EnableCors("AllowLocalhost")]
        public async Task<IActionResult> DeleteJewellery(int id)
        {
            try
            {
                var existingJewellery = await _jewelleryService.GetByIdAsync(id);
                if (existingJewellery == null)
                {
                    return NotFound();
                }

                await _jewelleryService.DeleteAsync(id);
                return Ok("Jewellery deleted successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to delete jewellery: {ex.Message}");
            }
        }
    }
}
