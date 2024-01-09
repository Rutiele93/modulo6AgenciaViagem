import { useState } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteDestino = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [IdDestino, setDestino] = useState(codigo);
 

  const handleDeleteDestino = () => {
  
    axios
      .delete("https://localhost:7023/api/Destinoes/" + IdDestino)
      .then(() => {
        router.push("/destino");
      })
      .catch((error) => {
        alert("Erro ao excluir Destino:" + error);
      });
  };

  return (

    <div>
    
      <h1 className={style.h1}>Excluir Destino</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID Destino:</label>
            </td>
            <td>
              <input type="text" value={IdDestino} onChange={(e) => setDestino(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteDestino}>Excluir Destino</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDestino;
