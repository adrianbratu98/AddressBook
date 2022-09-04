using Address.Book.Application.Common;
using Address.Book.Domain.Entities;
using Newtonsoft.Json;

namespace Address.Book.Infrastructure
{
    public class UsersRepository : IUsersRepository
    {
        public async Task<List<User>> GetUserList()
        {
            using StreamReader r = new StreamReader("Users.json");
            string json = await r.ReadToEndAsync();
            var items = JsonConvert.DeserializeObject<List<User>>(json);
            if (items != null)
                return items;
            throw new Exception("Users json file invalid");
        }
    }
 
}