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
    [Migration("20231221150028_primeiro")]
    partial class primeiro
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("ApiAgenciaRRR.Models.Cliente", b =>
                {
                    b.Property<int>("Id")
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

                    b.Property<int?>("Reservaid")
                        .HasColumnType("int");

                    b.Property<string>("Senha")
                        .HasColumnType("longtext");

                    b.Property<string>("Telefone")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("Reservaid");

                    b.ToTable("clientes");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Destino", b =>
                {
                    b.Property<int>("id")
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

                    b.Property<DateTime>("HoraChegada")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("HoraIda")
                        .HasColumnType("datetime(6)");

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

                    b.Property<int?>("Reservaid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Reservaid");

                    b.ToTable("Destinos");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Promocao", b =>
                {
                    b.Property<int>("id")
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

                    b.Property<DateTime>("Duracao")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("HoraChegada")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("HoraIda")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("ImagemUrlProm")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("NomeDestinoProm")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<decimal>("PrecoUnitProm")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int?>("QtdDisponivelProm")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<int?>("Reservaid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Reservaid");

                    b.ToTable("Promocaos");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Reserva", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
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

                    b.HasKey("id");

                    b.ToTable("Reservas");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Cliente", b =>
                {
                    b.HasOne("ApiAgenciaRRR.Models.Reserva", "Reserva")
                        .WithMany("Cliente")
                        .HasForeignKey("Reservaid");

                    b.Navigation("Reserva");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Destino", b =>
                {
                    b.HasOne("ApiAgenciaRRR.Models.Reserva", "Reserva")
                        .WithMany("Destino")
                        .HasForeignKey("Reservaid");

                    b.Navigation("Reserva");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Promocao", b =>
                {
                    b.HasOne("ApiAgenciaRRR.Models.Reserva", "Reserva")
                        .WithMany()
                        .HasForeignKey("Reservaid");

                    b.Navigation("Reserva");
                });

            modelBuilder.Entity("ApiAgenciaRRR.Models.Reserva", b =>
                {
                    b.Navigation("Cliente");

                    b.Navigation("Destino");
                });
#pragma warning restore 612, 618
        }
    }
}
