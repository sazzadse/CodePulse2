using CodePulse2.API.Models.Domain;

namespace CodePulse2.API.Repositories.Interfaces
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
        Task<IEnumerable<Category>> GetAllAsync();
        Task<Category?> GetById(Guid id);
        Task<Category> UpdateAsync(Category category);
        Task<Category?> DeleteAsync(Guid id);
    }
}
