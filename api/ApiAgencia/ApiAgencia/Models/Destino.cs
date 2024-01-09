using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Text.Json.Serialization;
using System.Threading;

namespace ApiAgenciaRRR.Models
{
    [Table("Destinos")]
    public class Destino
    {

        [Key]
        public int IdDestino { get; set; }

        [Required]
        [StringLength(50)]
        public String? NomeDestino { get; set; }

        [Required]
        public String? CategoriaDestino { get; set; }

        [Required]
        public String? Condicao {  get; set; }
        [Required]
        public DateTime DataIda { get; set; }
        [Required]
        public DateTime DataChegada { get; set; }

        [Required]
        [StringLength(8)]
        public String HoraIda { get; set; }

        [Required]
        [StringLength(8)]
        public String HoraChegada { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PrecoUnit { get; set; }

        [Required]
        [StringLength(300)]
        public String? ImagemUrl { get; set; }

        [Required]
        public int? QtdDisponivel { get; set; }

        [JsonIgnore]
        public ICollection<Reserva> Reservas { get; set; } = new Collection<Reserva>();
    }
}
