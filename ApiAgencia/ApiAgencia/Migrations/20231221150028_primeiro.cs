using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiAgencia.Migrations
{
    public partial class primeiro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Reservas",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Pagamento = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    StatusPedido = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PrecoTotal = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    QtdReservada = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservas", x => x.id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NomeCliente = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Cpf = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DataNascimento = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Email = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Senha = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Telefone = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Reservaid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_clientes_Reservas_Reservaid",
                        column: x => x.Reservaid,
                        principalTable: "Reservas",
                        principalColumn: "id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Destinos",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NomeDestino = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CategoriaDestino = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Condicao = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DataIda = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DataChegada = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    HoraIda = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    HoraChegada = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    PrecoUnit = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    ImagemUrl = table.Column<string>(type: "varchar(300)", maxLength: 300, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    QtdDisponivel = table.Column<int>(type: "int", nullable: false),
                    Reservaid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinos", x => x.id);
                    table.ForeignKey(
                        name: "FK_Destinos_Reservas_Reservaid",
                        column: x => x.Reservaid,
                        principalTable: "Reservas",
                        principalColumn: "id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Promocaos",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NomeDestinoProm = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CategoriaDestinoProm = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CondicaoProm = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DataIda = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DataChegada = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    HoraIda = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    HoraChegada = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Duracao = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    PrecoUnitProm = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    ImagemUrlProm = table.Column<string>(type: "varchar(300)", maxLength: 300, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    QtdDisponivelProm = table.Column<int>(type: "int", nullable: false),
                    Reservaid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Promocaos", x => x.id);
                    table.ForeignKey(
                        name: "FK_Promocaos_Reservas_Reservaid",
                        column: x => x.Reservaid,
                        principalTable: "Reservas",
                        principalColumn: "id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_clientes_Reservaid",
                table: "clientes",
                column: "Reservaid");

            migrationBuilder.CreateIndex(
                name: "IX_Destinos_Reservaid",
                table: "Destinos",
                column: "Reservaid");

            migrationBuilder.CreateIndex(
                name: "IX_Promocaos_Reservaid",
                table: "Promocaos",
                column: "Reservaid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clientes");

            migrationBuilder.DropTable(
                name: "Destinos");

            migrationBuilder.DropTable(
                name: "Promocaos");

            migrationBuilder.DropTable(
                name: "Reservas");
        }
    }
}
