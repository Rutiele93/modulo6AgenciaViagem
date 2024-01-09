import { useState } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";


const DeletePromocao = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [IdPromocao, setPromocao] = useState(codigo);


  const handleDeletePromocao = () => {

    axios
      .delete("https://localhost:7023/api/Promocaos/" + IdPromocao)
      .then(() => {
        router.push("/promocao");
      })
      .catch((error) => {
        alert("Erro ao excluir Promocao:" + error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: " 100vh" }}>
      <div className="center-div">
        <h1 classNameName={style.h1}>Excluir Promocao</h1>
        <table style={{ marginLeft: "20px" }}>
          <tbody>
            <tr>
              <td>
                <label>ID Promoção:</label>
              </td>
              <td>
                <input type="text" value={IdPromocao} onChange={(e) => setPromocao(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={handleDeletePromocao}>Excluir Promoção</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeletePromocao;
