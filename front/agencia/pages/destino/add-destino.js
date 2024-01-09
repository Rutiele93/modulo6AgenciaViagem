import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddDestino = () => {
  const [newDestino, setNewDestino] = useState({ NomeDestino: "", ImagemUrl: "", CategoriaDestino: "", Condicao: "", DataIda: "", DataChegada: "", HoraIda: "", HoraChegada: "", PrecoUnit: "", QtdDisponivelProm: ""});
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewDestino({ ...newDestino, [e.target.name]: e.target.value });
  };

  const handleAddDestino = () => {
    axios.post("https://localhost:7023/api/Destinoes", newDestino)

      .then(() => {
        router.push("/destino");
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
        <h1 className={style.h1}>Inserir Destino</h1>
        <table style={{ marginLeft: "20px" }}>
          <tbody>
            <tr >
              <td>
                <label className="sr-only text-center">Nome Destino:</label>
              </td>
              <td class="align-top">
                <input type="text" name="NomeDestino" value={newDestino.NomeDestino} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">URL imagem:</label>
              </td>
              <td>
                <input type="text" name="ImagemUrl" value={newDestino.ImagemUrl} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Categoria Destino:</label>
              </td>
              <td>
                <input type="text" name="CategoriaDestino" value={newDestino.CategoriaDestino} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Condicao:</label>
              </td>
              <td>
                <input type="text" name="Condicao" value={newDestino.Condicao} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Data Ida:</label>
              </td>
              <td>
                <input type="date" name="DataIda" value={newDestino.DataIda} onChange={handleInputChange} class="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Data Chegada:</label>
              </td>
              <td>
                <input type="date" name="DataChegada" value={newDestino.DataChegada} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Hora Ida:</label>
              </td>
              <td>
                <input type="text" name="HoraIda" value={newDestino.HoraIda} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Hora Chegada:</label>
              </td>
              <td>
                <input type="text" name="HoraChegada" value={newDestino.HoraChegada} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Preco Unit:</label>
              </td>
              <td>
                <input type="text" name="PrecoUnit" value={newDestino.PrecoUnit} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="sr-only text-center">Qtd. Disponivel:</label>
              </td>
              <td>
                <input type="text" name="QtdDisponivel" value={newDestino.QtdDisponivel} onChange={handleInputChange} classNames="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="w-100 btn btn-lg btn-dark" onClick={handleAddDestino}>Inserir Destino</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDestino;