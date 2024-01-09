﻿// <auto-generated />
using System;
using ApiAgencia.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ApiAgencia.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20240104204116_quarto")]
    partial class quarto
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("ApiAgenciaRRR.Models.Cliente", b =>
                {
                    b.Property<int>("IdCliente")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Cpf")
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .HasColumnType("longtext");

                    b.Property<string>("NomeCliente")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<string>("Senha")
                        .HasColumnType("longtext");

                    b.Property<string>("Telefone")
                        .HasColumnType("longtext");

                    b.HasKey("IdCliente");

                    b.ToTable("clientes");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Destino", b =>
                {
                    b.Property<int>("IdDestino")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("CategoriaDestino")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Condicao")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DataChegada")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataIda")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("HoraChegada")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("varchar(8)");

                    b.Property<string>("HoraIda")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("varchar(8)");

                    b.Property<string>("ImagemUrl")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("NomeDestino")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<decimal>("PrecoUnit")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int?>("QtdDisponivel")
                        .IsRequired()
                        .HasColumnType("int");

                    b.HasKey("IdDestino");

                    b.ToTable("Destinos");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Promocao", b =>
                {
                    b.Property<int>("IdPromocao")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("CategoriaDestinoProm")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("CondicaoProm")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DataChegada")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataIda")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Duracao")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("varchar(8)");

                    b.Property<string>("HoraChegada")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("varchar(8)");

                    b.Property<string>("HoraIda")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("varchar(8)");

                    b.Property<string>("ImagemUrlProm")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("NomeDestinoProm")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<decimal>("PrecoAnteriorProm")
                        .HasColumnType("decimal(10,2)");

                    b.Property<decimal>("PrecoUnitProm")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int?>("QtdDisponivelProm")
                        .IsRequired()
                        .HasColumnType("int");

                    b.HasKey("IdPromocao");

                    b.ToTable("Promocaos");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Reserva", b =>
                {
                    b.Property<int>("IdReserva")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("IdCliente")
                        .HasColumnType("int");

                    b.Property<int>("IdDestino")
                        .HasColumnType("int");

                    b.Property<int>("IdPromocao")
                        .HasColumnType("int");

                    b.Property<string>("Pagamento")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("PrecoTotal")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int>("QtdReservada")
                        .HasColumnType("int");

                    b.Property<string>("StatusPedido")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("IdReserva");

                    b.HasIndex("IdCliente");

                    b.HasIndex("IdDestino");

                    b.HasIndex("IdPromocao");

                    b.ToTable("Reservas");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Reserva", b =>
                {
                    b.HasOne("ApiAgenciaRRR.Models.Cliente", "Cliente")
                        .WithMany("Reservas")
                        .HasForeignKey("IdCliente")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApiAgenciaRRR.Models.Destino", "Destino")
                        .WithMany("Reservas")
                        .HasForeignKey("IdDestino")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApiAgenciaRRR.Models.Promocao", "Promocao")
                        .WithMany("Reservas")
                        .HasForeignKey("IdPromocao")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");

                    b.Navigation("Destino");

                    b.Navigation("Promocao");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Cliente", b =>
                {
                    b.Navigation("Reservas");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Destino", b =>
                {
                    b.Navigation("Reservas");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Promocao", b =>
                {
                    b.Navigation("Reservas");
                });
#pragma warning restore 612, 618
        }
    }
}
