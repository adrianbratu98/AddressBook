using Address.Book.Application.Dto;
using Address.Book.Application.Queries;
using Microsoft.AspNetCore.Mvc;

namespace Address.Book.API
{
    [Route("api/user")]
    [ApiController]
    public class UserController : BaseApiController
    {
        [HttpGet("getList")]
        [ProducesResponseType(typeof(List<UserDto>), 200)]
        public async Task<ActionResult<List<UserDto>>> GetList()
        {
            return Ok(await Mediator.Send(new GetUserListQuery()));
        }
    }
}
