using Microsoft.AspNetCore.Identity;

namespace CodePulse2.API.Repositories.Interfaces
{
    public interface ITokenRepository
    {
        string CreateJwtToken(IdentityUser user, List<string> roles);
    }
}
