import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const AddCliente = () => {
  const [newCliente, setNewCliente] = useState({ NomeCliente: "", Cpf: "", DataNascimento: "", Email: "", Senha: "", Telefone: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewCliente({ ...newCliente, [e.target.name]: e.target.value });
  };

  const handleAddCliente = () => {
    axios.post("https://localhost:7023/api/Clientes", newCliente)

      .then(() => {
        router.push("/cliente");
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
        <h1>Inserir Cliente</h1>
        <table style={{ marginLeft: "20px" }}>
          <tbody>
            <tr>
              <td>
                <label>Nome Cliente:</label>
              </td>
              <td>
                <input type="text" name="NomeCliente" value={newCliente.NomeCliente} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Cpf:</label>
              </td>
              <td>
                <input type="text" name="Cpf" value={newCliente.Cpf} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Telefone:</label>
              </td>
              <td>
                <input type="text" name="Telefone" value={newCliente.Telefone} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input type="text" name="Email" value={newCliente.Email} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Data Nascimento:</label>
              </td>
              <td>
                <input type="date" name="DataNascimento" value={newCliente.DataNascimento} onChange={handleInputChange} className="form-control form-control-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Senha:</label>
              </td>
              <td>
                <input type="password" name="Senha" value={newCliente.Senha} onChange={handleInputChange} className="form-control form-control-lg"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={handleAddCliente}>Inserir Cliente</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCliente;