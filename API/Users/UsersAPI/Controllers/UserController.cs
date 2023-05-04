using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsersAPI.Data;

namespace UsersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }


        [HttpGet()]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            User? user = await _context.Users.OrderByDescending(u => u.id).FirstOrDefaultAsync();
            if (user == null)
            {
                return BadRequest("User not found");
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>>CreateUsers(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>>UpdateUsers(User user)
        {
            var DbUser = await _context.Users.FindAsync(user.id); 
            if(DbUser == null)
            {
                return BadRequest("User not found");
            }
            DbUser.name = user.name;
            DbUser.email = user.email;
            DbUser.telephone = user.telephone;
            DbUser.message_topics = user.message_topics;
            DbUser.message = user.message;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteUsers(int id)
        {
            var DbUser = await _context.Users.FindAsync(id);
            if (DbUser == null)
            {
                return BadRequest("User not found");
            }
            _context.Users.Remove(DbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
