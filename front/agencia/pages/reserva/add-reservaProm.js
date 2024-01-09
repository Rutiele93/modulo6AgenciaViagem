import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const AddReserva = () => {
  const [newReserva, setNewReserva] = useState({ Pagamento: "", StatusPedido: "", PrecoTotal: "", QtdReservada: "", IdCliente: "", IdPromocao: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewReserva({ ...newReserva, [e.target.name]: e.target.value });
  };

  const handleAddReserva = () => {
    axios.post("https://localhost:7023/api/Reservas", newReserva)
    
      .then(() => {
        router.push("/reserva");
      })
      .catch((error) => {
        if (error.response) {
          // O servidor retornou um código de status diferente de 2xx
          console.log("Data do erro:", error.response.data);
          console.log("Status do erro:", error.response.status);
          console.log("Cabeçalhos do erro:", error.response.headers);
        } else if (error.request) {
          // A solicitação foi feita, mas não recebeu resposta
          console.log("Request feita, mas sem resposta:", error.request);
        } else {
          // Algo aconteceu na configuração da solicitação que gerou um erro
          console.log("Erro de configuração da solicitação:", error.message);
        }
        console.log("Erro completo:", error.config);
      });
  };
  return (  
    <div style={{ margin: "0 auto" }}>
      <h1 className={style.h1}>Inserir Reserva</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>Id Promoção:</label>
            </td>
            <td>
              <input
                type="text" name="IdPromocao" value={newReserva.IdPromocao} onChange={handleInputChange} />
            </td>
          </tr>    
          <tr>
            <td>
              <label>Pagamento:</label>
            </td>
            <td>
              <input type="text" name="Pagamento" value={newReserva.Pagamento} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Status Pedido:</label>
            </td>
            <td>
              <input type="text" name="StatusPedido" value={newReserva.StatusPedido} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Id Cliente:</label>
            </td>
            <td>
              <input type="text" name="IdCliente" value={newReserva.IdCliente} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Preco Total:</label>
            </td>
            <td>
              <input type="text" name="PrecoTotal" value={newReserva.PrecoTotal} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Qtd. Reservada:</label>
            </td>
            <td>
              <input type="text" name="QtdReservada" value={newReserva.QtdReservada} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleAddReserva}>Inserir Reserva</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddReserva;