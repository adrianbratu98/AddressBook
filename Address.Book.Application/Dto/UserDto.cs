using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Address.Book.Application.Dto
{
    public class UserDto
    {
        public UserDto(string firstName, string lastName, string email, UserAddressDto userAddress)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            UserAddress = userAddress;
        }

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public virtual UserAddressDto UserAddress { get; set; }
    }
}
