import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";

const UpdatePromocao = () => {
  const [promocao, setPromocao] = useState({ idPromocao: "", NomeDestinoProm: "", ImagemUrlProm: "", CategoriaDestinoProm: "", CondicaoProm: "", DataIda: "", DataChegada: "", HoraIda: "", HoraChegada: "", Duracao: "", PrecoAnteriorProm: "", PrecoUnitProm: "", QtdDisponivelProm: "" });
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do Promocao a ser atualizado
    axios
      .get("https://localhost:7023/api/Promocaos/" + promocao.idPromocao)
      .then((response) => {
        setPromocao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do Promoção:", error);
      });
  }, [promocao.IdPromocao]);

  const handleInputChange = (e) => {
    setPromocao({ ...promocao, [e.target.name]: e.target.value });
  };

  const handleUpdatePromocao = () => {
    axios
      .put("https://localhost:7023/api/Promocaos/" + promocao.idPromocao, promocao)
      .then(() => {
        router.push('/promocao');

      })
      .catch((error) => {
        console.error("Erro ao atualizar Promoção:", error);
      });
  };

  return (
    <div classNameName="container d-flex align-items-center justify-content-center" style={{ height: " 100vh" }}>
      <div classNameName="center-div">
        <h1 classNameName={style.h1}>Atualizar Promoção</h1>
        <table style={{ marginLeft: '20px' }}>
          <tbody>
            <tr>
              <td>
                <label>ID da Promoção:</label>
              </td>
              <td>
                <input type="text" name="IdPromocao" value={promocao.idPromocao = codigo} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Nome Destino:</label>
              </td>
              <td>
                <input type="text" name="NomeDestinoProm" value={promocao.NomeDestinoProm} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Imagem URL:</label>
              </td>
              <td>
                <input type="text" name="ImagemUrlProm" value={promocao.ImagemUrlProm} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Categoria Destino:</label>
              </td>
              <td>
                <input type="text" name="CategoriaDestinoProm" value={promocao.CategoriaDestinoProm} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Condicao:</label>
              </td>
              <td>
                <input type="text" name="CondicaoProm" value={promocao.CondicaoProm} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Data Ida:</label>
              </td>
              <td>
                <input type="date" name="DataIda" value={promocao.DataIda} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Data Chegada:</label>
              </td>
              <td>
                <input type="date" name="DataChegada" value={promocao.DataChegada} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Hora Ida:</label>
              </td>
              <td>
                <input type="text" name="HoraIda" value={promocao.HoraIda} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Hora Chegada:</label>
              </td>
              <td>
                <input type="text" name="HoraChegada" value={promocao.HoraChegada} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Duração:</label>
              </td>
              <td>
                <input type="text" name="Duracao" value={promocao.Duracao} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Preco Anterior:</label>
              </td>
              <td>
                <input type="text" name="PrecoAnteriorProm" value={promocao.PrecoAnteriorProm} onChange={handleInputChange} classNameName="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Preco Unit:</label>
              </td>
              <td>
                <input type="text" name="PrecoUnitProm" value={promocao.PrecoUnitProm} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Qtd. Disponivel:</label>
              </td>
              <td>
                <input type="text" name="QtdDisponivelProm" value={promocao.QtdDisponivelProm} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={handleUpdatePromocao}>Atualizar Promoção</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdatePromocao;
