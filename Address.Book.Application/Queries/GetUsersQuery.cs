using Address.Book.Application.Common;
using Address.Book.Application.Dto;
using MediatR;

namespace Address.Book.Application.Queries
{
    public record GetUserListQuery : IRequest<List<UserDto>>;

    public class GetGetUserListQueryHandler : IRequestHandler<GetUserListQuery, List<UserDto>>
    {
        private IUsersRepository UsersRepository { get; }

        public GetGetUserListQueryHandler(IUsersRepository usersRepository)
        {
            UsersRepository = usersRepository;
        }

        public async Task<List<UserDto>> Handle(GetUserListQuery request, CancellationToken cancellationToken) 
            => (await UsersRepository.GetUserList())
                .Select(user => new UserDto(user.FirstName, user.LastName, user.Email,
                    new UserAddressDto(user.Address.Country, user.Address.City, user.Address.Street)))
                .ToList();
    }
}
