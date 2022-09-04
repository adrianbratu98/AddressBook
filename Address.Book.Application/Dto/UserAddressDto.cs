using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Address.Book.Application.Dto
{
    public class UserAddressDto
    {
        public string Country { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public UserAddressDto(string country, string city, string street)
        {
            Country = country;
            City = city;
            Street = street;
        }
    }
}
