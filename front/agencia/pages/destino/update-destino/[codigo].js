import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateDestino = () => {
  const [destino, setDestino] = useState({ idDestino: "",NomeDestino: "",ImagemUrl: "",CategoriaDestino: "",Condicao: "",DataIda: "",DataChegada: "",HoraIda: "",HoraChegada: "",PrecoUnit: "",QtdDisponivel: "" });
  const router = useRouter(); 
  const { codigo } = router.query;

  useEffect(() => {
       // Faça uma chamada GET para a API para obter detalhes do Destino a ser atualizado
    axios
      .get("https://localhost:7023/api/Destinoes/" + destino.idDestino)
      .then((response) => {
      setDestino(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do Destino:", error);
      });
   
  }, [destino.IdDestino]);

  const handleInputChange = (e) => {
    setDestino({ ...destino, [e.target.name]: e.target.value });
  };

  const handleUpdateDestino = () => {
    axios
      .put("https://localhost:7023/api/Destinoes/" + destino.idDestino, destino)
      .then(() => {
        router.push('/destino');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar Destino:", error);
      });
  };

 return (    
  <div className="container d-flex align-items-center justify-content-center" style={{height:" 100vh"}}>
    <div className="center-div">
      <h1>Atualizar Destino</h1>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td>
              <label>ID da Destino:</label>
            </td>
            <td>
              <input type="text" name="IdDestino" value={destino.idDestino = codigo} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Nome Destino:</label>
            </td>
            <td>
              <input type="text" name="NomeDestino" value={destino.NomeDestino} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Imagem URL:</label>
            </td>
            <td>
              <input type="text" name="ImagemUrl" value={destino.ImagemUrl} onChange={handleInputChange}  className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Categoria Destino:</label>
            </td>
            <td>
              <input type="text" name="CategoriaDestino" value={destino.CategoriaDestino} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Condicao:</label>
            </td>
            <td>
              <input type="text" name="Condicao" value={destino.Condicao} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Data Ida:</label>
            </td>
            <td>
              <input type="date" name="DataIda" value={destino.DataIda} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Data Chegada:</label>
            </td>
            <td>
              <input type="date" name="DataChegada" value={destino.DataChegada} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr> 
          <tr>
            <td>
              <label>Hora Ida:</label>
            </td>
            <td>
              <input type="text" name="HoraIda" value={destino.HoraIda} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>       
          <tr>
            <td>
              <label>Hora Chegada:</label>
            </td>
            <td>
              <input type="text" name="HoraChegada" value={destino.HoraChegada} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Preco Unit:</label>
            </td>
            <td>
              <input type="text" name="PrecoUnit" value={destino.PrecoUnit} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td>
                <label>Qtd. Disponivel:</label>
            </td>
            <td>
                <input type="text" name="QtdDisponivel" value={destino.QtdDisponivel} onChange={handleInputChange} className="form-control form-control-lg"/>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateDestino} >Atualizar destino</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  );
};

export default UpdateDestino ;
