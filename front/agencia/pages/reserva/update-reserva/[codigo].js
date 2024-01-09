import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';


const UpdateReserva = () => {
  const [reserva, setReserva] = useState({ idReserva: "", IdDestino: "", IdCliente: "", Pagamento: "", IdPromocao: "", StatusPedido: "", DataIda: "", DataChegada: "", HoraIda: "", HoraChegada: "", Duracao: "", PrecoAnteriorProm: "", PrecoUnitProm: "", QtdDisponivelProm: "" });
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do Promocao a ser atualizado
    axios
      .get("https://localhost:7023/api/Reservas/" + reserva.idReserva)
      .then((response) => {
        setReserva(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do Reserva:", error);
      });
  }, [reserva.idReserva]);

  const handleInputChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleUpdateReserva = () => {
    axios
      .put("https://localhost:7023/api/Reservas/" + reserva.idReserva, reserva)
      .then(() => {
        router.push('/reserva');

      })
      .catch((error) => {
        console.error("Erro ao atualizar Reserva:", error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: " 100vh" }}>
      <div className="center-div">
        <h1 className={style.h1}>Atualizar Reserva</h1>
        <table style={{ marginLeft: '20px' }}>
          <tbody>
            <tr>
              <td>
                <label>ID da Reserva:</label>
              </td>
              <td>
                <input type="text" name="IdReserva" value={reserva.idReserva = codigo} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Id Destino:</label>
              </td>
              <td>
                <input type="text" name="IdDestino" value={reserva.IdDestino} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Id Promoção:</label>
              </td>
              <td>
                <input type="text" name="IdPromocao" value={reserva.IdPromocao} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Id Cliente:</label>
              </td>
              <td>
                <input type="text" name="IdCliente" value={reserva.IdCliente} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Status Pedido:</label>
              </td>
              <td>
                <input type="text" name="StatusPedido" value={reserva.StatusPedido} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Pagamento:</label>
              </td>
              <td>
                <input type="text" name="Pagamento" value={reserva.Pagamento} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Preco Total:</label>
              </td>
              <td>
                <input type="text" name="PrecoTotal" value={reserva.PrecoTotal} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Qtd Reservada:</label>
              </td>
              <td>
                <input type="text" name="QtdReservada" value={reserva.QtdReservada} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={handleUpdateReserva}>Atualizar Reserva</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateReserva;
