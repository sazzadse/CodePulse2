using CodePulse2.API.Models.Domain;
using Microsoft.AspNetCore.Http;

namespace CodePulse2.API.Repositories.Interfaces
{
    public interface IImageRepository
    {
        Task<BlogImage> Upload(IFormFile file, BlogImage blogImage);
        Task<IEnumerable<BlogImage>> GetAll();
    }
}
