import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link"; // Importe o Link para criar links de navegação

const Home = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7023/api/Clientes")
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Cliente:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Cliente</h1>
      <p>
        <Link href="cliente/add-cliente" className="btn btn-primary"> Inserir Cliente</Link>
      </p>
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr className="table-info"> 
            <th>Id</th>
            <th>Nome Cliente</th>
            <th>Cpf</th>
            <th>Data Nascimento</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        {cliente.map((element) => (
          <tbody key={element.idCliente}>
            <tr className={style.tabela}>
              <td>{element.idCliente}</td>
              <td>{element.nomeCliente}</td>
              <td>{element.cpf}</td>
              <td>{new Date(element.dataNascimento).toLocaleDateString()}</td>
              <td>{element.email}</td>
              <td>{element.telefone}</td>
              <td>
                <Link href={`cliente/update-cliente/${element.idCliente}`} className="btn btn-warning">  Editar </Link>
                <Link href={`cliente/delete-cliente/${element.idCliente}`} className="btn btn btn-danger"> Excluir </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      </div>
    </div>
  );
};

export default Home;


