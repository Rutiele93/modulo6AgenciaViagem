using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiAgencia.Migrations
{
    public partial class quarto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_clientes_ClienteIdCliente",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Destinos_DestinoIdDestino",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Promocaos_PromocaoIdPromocao",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_ClienteIdCliente",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_DestinoIdDestino",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_PromocaoIdPromocao",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "ClienteIdCliente",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "DestinoIdDestino",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "PromocaoIdPromocao",
                table: "Reservas");

            migrationBuilder.AddColumn<int>(
                name: "IdCliente",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdDestino",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdPromocao",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_IdCliente",
                table: "Reservas",
                column: "IdCliente");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_IdDestino",
                table: "Reservas",
                column: "IdDestino");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_IdPromocao",
                table: "Reservas",
                column: "IdPromocao");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_clientes_IdCliente",
                table: "Reservas",
                column: "IdCliente",
                principalTable: "clientes",
                principalColumn: "IdCliente",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Destinos_IdDestino",
                table: "Reservas",
                column: "IdDestino",
                principalTable: "Destinos",
                principalColumn: "IdDestino",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Promocaos_IdPromocao",
                table: "Reservas",
                column: "IdPromocao",
                principalTable: "Promocaos",
                principalColumn: "IdPromocao",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_clientes_IdCliente",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Destinos_IdDestino",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Promocaos_IdPromocao",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_IdCliente",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_IdDestino",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_IdPromocao",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "IdCliente",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "IdDestino",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "IdPromocao",
                table: "Reservas");

            migrationBuilder.AddColumn<int>(
                name: "ClienteIdCliente",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DestinoIdDestino",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PromocaoIdPromocao",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_ClienteIdCliente",
                table: "Reservas",
                column: "ClienteIdCliente");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_DestinoIdDestino",
                table: "Reservas",
                column: "DestinoIdDestino");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_PromocaoIdPromocao",
                table: "Reservas",
                column: "PromocaoIdPromocao");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_clientes_ClienteIdCliente",
                table: "Reservas",
                column: "ClienteIdCliente",
                principalTable: "clientes",
                principalColumn: "IdCliente");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Destinos_DestinoIdDestino",
                table: "Reservas",
                column: "DestinoIdDestino",
                principalTable: "Destinos",
                principalColumn: "IdDestino");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Promocaos_PromocaoIdPromocao",
                table: "Reservas",
                column: "PromocaoIdPromocao",
                principalTable: "Promocaos",
                principalColumn: "IdPromocao");
        }
    }
}
