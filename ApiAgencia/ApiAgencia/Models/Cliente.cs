using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiAgenciaRRR.Models
{
    [Table("clientes")]
    public class Cliente
    {
        [Key]
        public int IdCliente { get; set; }

        [Required]
        [StringLength(80)]
        public string? NomeCliente { get; set; }

        public string? Cpf { get; set; }

        public DateTime DataNascimento { get; set; }

        public string? Email { get; set; }

        public string? Senha { get; set; }

        public string? Telefone { get; set; }

        [JsonIgnore]
        public ICollection<Reserva> Reservas { get; set; } = new Collection<Reserva>();

    }

}