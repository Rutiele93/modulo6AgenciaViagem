using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiAgenciaRRR.Models
{
    [Table("Reservas")]
    public class Reserva
    {
        [Key]
        public int IdReserva { get; set; }

        [Required]
        public string Pagamento { get; set; }

        [Required]
        public string StatusPedido { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PrecoTotal { get; set; }

        [Required]
        public int QtdReservada { get; set; }

        // Chave estrangeira referenciando a tabela Cliente
        [Required]
        public int IdCliente { get; set; }

        // Propriedade de navegação para acessar o Cliente relacionado
        [JsonIgnore]
        [ForeignKey("IdCliente")]
        public Cliente Cliente { get; set; }

        public int IdDestino { get; set; }

        [JsonIgnore]
        [ForeignKey("IdDestino")]
        public Destino Destino { get; set; }

        public int IdPromocao { get; set; }

        [JsonIgnore]
        [ForeignKey("IdPromocao")]
        public Promocao Promocao { get; set; }
    }
}

