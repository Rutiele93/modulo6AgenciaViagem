import { useState } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

const DeleteCliente = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [IdCliente, setCliente] = useState(codigo);
 

  const handleDeleteCliente = () => {
  
    axios
      .delete("https://localhost:7023/api/Clientes/" + IdCliente)
      .then(() => {
        router.push("/cliente");
      })
      .catch((error) => {
        alert("Erro ao excluir Cliente:" + error);
      });
  };

  return (

    <div>    
      <h1>Excluir Cliente</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID Cliente:</label>
            </td>
            <td>
              <input type="text" value={IdCliente} onChange={(e) => setCliente(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteCliente}>Excluir Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteCliente;
