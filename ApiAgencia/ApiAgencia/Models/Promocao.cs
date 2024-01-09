using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiAgenciaRRR.Models
{
    [Table("Promocaos")]
    public class Promocao
    {
        [Key]
        public int IdPromocao { get; set; }

        [Required]
        [StringLength(50)]
        public String? NomeDestinoProm { get; set; }

        [Required]
        public String? CategoriaDestinoProm { get; set; }

        [Required]
        public String? CondicaoProm { get; set; }

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
        [StringLength(8)]
        public String Duracao { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PrecoUnitProm { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PrecoAnteriorProm { get; set; }

        [Required]
        [StringLength(300)]
        public String? ImagemUrlProm { get; set; }

        [Required]
        public int? QtdDisponivelProm { get; set; }

        [JsonIgnore]
        public ICollection<Reserva> Reservas { get; set; } = new Collection<Reserva>();
    }
}

