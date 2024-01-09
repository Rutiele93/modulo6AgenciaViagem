using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiAgencia.Migrations
{
    public partial class segunda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_clientes_Reservas_Reservaid",
                table: "clientes");

            migrationBuilder.DropForeignKey(
                name: "FK_Destinos_Reservas_Reservaid",
                table: "Destinos");

            migrationBuilder.DropForeignKey(
                name: "FK_Promocaos_Reservas_Reservaid",
                table: "Promocaos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservas",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Promocaos_Reservaid",
                table: "Promocaos");

            migrationBuilder.DropIndex(
                name: "IX_Destinos_Reservaid",
                table: "Destinos");

            migrationBuilder.DropIndex(
                name: "IX_clientes_Reservaid",
                table: "clientes");

            migrationBuilder.DropColumn(
                name: "Reservaid",
                table: "Promocaos");

            migrationBuilder.DropColumn(
                name: "Reservaid",
                table: "Destinos");

            migrationBuilder.DropColumn(
                name: "Reservaid",
                table: "clientes");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Reservas",
                newName: "IdPromocao");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Promocaos",
                newName: "IdPromocao");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Destinos",
                newName: "IdDestino");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "clientes",
                newName: "IdCliente");

            migrationBuilder.AlterColumn<int>(
                name: "IdPromocao",
                table: "Reservas",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<int>(
                name: "IdReserva",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

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
                name: "PromocaoIdPromocao",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservas",
                table: "Reservas",
                column: "IdReserva");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservas",
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
                name: "IdReserva",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "ClienteIdCliente",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "DestinoIdDestino",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "IdCliente",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "IdDestino",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "PromocaoIdPromocao",
                table: "Reservas");

            migrationBuilder.RenameColumn(
                name: "IdPromocao",
                table: "Reservas",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "IdPromocao",
                table: "Promocaos",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "IdDestino",
                table: "Destinos",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "IdCliente",
                table: "clientes",
                newName: "Id");

            migrationBuilder.AlterColumn<int>(
                name: "id",
                table: "Reservas",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<int>(
                name: "Reservaid",
                table: "Promocaos",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Reservaid",
                table: "Destinos",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Reservaid",
                table: "clientes",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservas",
                table: "Reservas",
                column: "id");

            migrationBuilder.CreateIndex(
                name: "IX_Promocaos_Reservaid",
                table: "Promocaos",
                column: "Reservaid");

            migrationBuilder.CreateIndex(
                name: "IX_Destinos_Reservaid",
                table: "Destinos",
                column: "Reservaid");

            migrationBuilder.CreateIndex(
                name: "IX_clientes_Reservaid",
                table: "clientes",
                column: "Reservaid");

            migrationBuilder.AddForeignKey(
                name: "FK_clientes_Reservas_Reservaid",
                table: "clientes",
                column: "Reservaid",
                principalTable: "Reservas",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Destinos_Reservas_Reservaid",
                table: "Destinos",
                column: "Reservaid",
                principalTable: "Reservas",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Promocaos_Reservas_Reservaid",
                table: "Promocaos",
                column: "Reservaid",
                principalTable: "Reservas",
                principalColumn: "id");
        }
    }
}
