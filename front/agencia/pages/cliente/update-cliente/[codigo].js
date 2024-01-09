import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";

const UpdateCliente = () => {
  const [cliente, setCliente] = useState({ idCliente: "", NomeCliente: "", Cpf: ""});
  const router = useRouter(); 
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("https://localhost:7023/api/Clientes/" + cliente.idCliente)
      .then((response) => {
       setCliente(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do cliente:", error);
      });
  }, [cliente.IdCliente]);

  const handleInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleUpdateCliente = () => {
    axios
      .put("https://localhost:7023/api/Clientes/" + cliente.idCliente, cliente)
      .then(() => {
        router.push('/cliente');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar cliente:", error);
      });
  };

  return (
    
    <div>
      <h1>Atualizar Categoria</h1>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td>
              <label>ID da Categoria:</label>
            </td>
            <td>
              <input type="text" name="IdCliente" value={cliente.idCliente = codigo} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input
                type="text" name="NomeCliente" value={cliente.NomeCliente} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Cpf:</label>
            </td>
            <td>
              <input type="text" name="Cpf" value={cliente.Cpf} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateCliente}>Atualizar Categoria</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateCliente;
