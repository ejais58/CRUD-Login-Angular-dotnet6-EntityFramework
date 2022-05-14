using LoginAPI.Data;
using LoginAPI.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroController : ControllerBase
    {
        private readonly DataContext context;

        public RegistroController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet] 
        public async Task<ActionResult<List<Registro>>> Get()
        {
            return Ok(await this.context.Registros.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Registro>>> AddCliente(Registro registro)
        {
            this.context.Registros.Add(registro);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Registros.ToListAsync());
        }
    }
}
