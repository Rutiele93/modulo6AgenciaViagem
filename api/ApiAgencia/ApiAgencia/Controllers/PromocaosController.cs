using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiAgencia.Context;
using ApiAgenciaRRR.Models;

namespace ApiAgencia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromocaosController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public PromocaosController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Promocaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promocao>>> GetPromocaos()
        {
            return await _context.Promocaos.ToListAsync();
        }

        // GET: api/Promocaos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Promocao>> GetPromocao(int id)
        {
            var promocao = await _context.Promocaos.FindAsync(id);

            if (promocao == null)
            {
                return NotFound();
            }

            return promocao;
        }

        // PUT: api/Promocaos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPromocao(int id, Promocao promocao)
        {
            if (id != promocao.IdPromocao)
            {
                return BadRequest();
            }

            _context.Entry(promocao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromocaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Promocaos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Promocao>> PostPromocao(Promocao promocao)
        {
            _context.Promocaos.Add(promocao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPromocao", new { id = promocao.IdPromocao }, promocao);
        }

        // DELETE: api/Promocaos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromocao(int id)
        {
            var promocao = await _context.Promocaos.FindAsync(id);
            if (promocao == null)
            {
                return NotFound();
            }

            _context.Promocaos.Remove(promocao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromocaoExists(int id)
        {
            return _context.Promocaos.Any(e => e.IdPromocao == id);
        }
    }
}
