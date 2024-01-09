import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";

const AddPromocao = () => {
  const [newPromocao, setNewPromocao] = useState({ NomeDestinoProm: "", ImagemUrlProm: "", CategoriaDestinoProm: "", CondicaoProm: "", DataIda: "", DataChegada: "", HoraIda: "", HoraChegada: "", Duracao: "", PrecoAnteriorProm: "", PrecoUnitProm: "", QtdDisponivelProm: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewPromocao({ ...newPromocao, [e.target.name]: e.target.value });
  };

  const handleAddPromocao = () => {
    axios.post("https://localhost:7023/api/Promocaos", newPromocao)

      .then(() => {
        router.push("/promocao");
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
    <div className="container d-flex align-items-center justify-content-center" style={{ height: " 100vh" }}>
      <div className="center-div">        
          <h1 className={style.h1}>Inserir Promoção</h1>
          <table style={{ marginLeft: "20px" }}>
            <tbody>
              <tr>
                <td>
                  <label>Nome Destino:</label>
                </td>
                <td>
                  <input
                    type="text" name="NomeDestinoProm" value={newPromocao.NomeDestinoProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>URL imagem:</label>
                </td>
                <td>
                  <input type="text" name="ImagemUrlProm" value={newPromocao.ImagemUrlProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Categoria Destino:</label>
                </td>
                <td>
                  <input type="text" name="CategoriaDestinoProm" value={newPromocao.CategoriaDestinoProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Condicao:</label>
                </td>
                <td>
                  <input type="text" name="CondicaoProm" value={newPromocao.CondicaoProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Data Ida:</label>
                </td>
                <td>
                  <input type="date" name="DataIda" value={newPromocao.DataIda} onChange={handleInputChange}className="form-control form-control-lg" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Data Chegada:</label>
                </td>
                <td>
                  <input type="date" name="DataChegada" value={newPromocao.DataChegada} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Hora Ida:</label>
                </td>
                <td>
                  <input type="text" name="HoraIda" value={newPromocao.HoraIda} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Hora Chegada:</label>
                </td>
                <td>
                  <input type="text" name="HoraChegada" value={newPromocao.HoraChegada} onChange={handleInputChange} className="form-control form-control-lg" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Duração:</label>
                </td>
                <td>
                  <input type="text" name="Duracao" value={newPromocao.Duracao} onChange={handleInputChange} className="form-control form-control-lg" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Preco Anterior:</label>
                </td>
                <td>
                  <input type="text" name="PrecoAnteriorProm" value={newPromocao.PrecoAnteriorProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Preco Unit:</label>
                </td>
                <td>
                  <input type="text" name="PrecoUnitProm" value={newPromocao.PrecoUnitProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Qtd. Disponivel:</label>
                </td>
                <td>
                  <input type="text" name="QtdDisponivelProm" value={newPromocao.QtdDisponivelProm} onChange={handleInputChange} className="form-control form-control-lg"/>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button onClick={handleAddPromocao}>Inserir Promoção</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      );
};

      export default AddPromocao;