using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Address.Book.Domain.Entities
{
    public class User
    {
        public User(string firstName, string lastName, string email, UserAddress address)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Address = address;
        }

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public virtual UserAddress Address { get; set; }
    }
}
