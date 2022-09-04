using Address.Book.Domain.Entities;


namespace Address.Book.Application.Common
{
    public interface IUsersRepository
    {
        public Task<List<User>> GetUserList();
    }
}
