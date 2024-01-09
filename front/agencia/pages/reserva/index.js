import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link"; // Importe o Link para criar links de navegação

const Home = () => {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7023/api/Reservas")
      .then((response) => {
        setReserva(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Reserva:", error);
      });
  }, []);

  return (
    <div className="row bd-navbar">
      <h1 className={style.h1}>Lista de Reserva</h1>
      <p>
        <a href="reserva/add-reserva" className="btn btn-primary"> Inserir Reserva</a>
      </p>
      <div className="table-responsive">
        <table className="table">     
        <thead>
        <tr className="table-info">
            <th>Id</th>
            <th>Destino</th>
            <th>Promoção</th>
            <th>Pagamento</th>
            <th>Status Pedido</th>
            <th>Preco Total</th>
            <th>Qtd. Reservada</th>
            <th>Cliente</th>
            <th>Ações</th>{" "}
            {/* Adicione uma coluna para as ações de edição e exclusão */}
          </tr>
        </thead>
        {reserva.map((element) => (
          <tbody key={element.idReserva}>
            <tr className={style.tabela}>
              <td>{element.idReserva}</td>
              <td>{element.idDestino ?? 'N/A'}</td>
              <td>{element.idPromocao ?? 'N/A'}</td>
              <td>{element.pagamento}</td>
              <td>{element.statusPedido}</td>
              <td>{element.precoTotal}</td>
              <td>{element.qtdReservada}</td>
              <td>{element.idCliente ?? 'N/A'}</td>                   
              <td>
                <Link href={`reserva/delete-reserva/${element.idReserva}`} className="btn btn btn-danger"> Excluir </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </div>
  );
};

export default Home;