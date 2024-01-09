import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link"; // Importe o Link para criar links de navegação

const Home = () => {
  const [destino, setDestino] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7023/api/Destinoes")
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Destino:", error);
      });
  }, []);

  return (
    <div className="row bd-navbar">
      <h1 className={style.h1} >Lista de Destino</h1>
      <p>
        <a className="btn btn-primary" href="destino/add-destino"> Inserir Destino</a>
      </p>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="table-info">
              <th scope="col" className="text-center">Id</th>
              <th scope="col" className="text-center">Destino</th>
              <th scope="col" className="text-center">ImagemUrl</th>
              <th scope="col" className="text-center">Categoria</th>
              <th scope="col" className="text-center">Condicao</th>
              <th scope="col" className="text-center">Data Ida</th>
              <th scope="col" className="text-center">Data Chegada</th>
              <th scope="col" className="text-center">Hora Ida</th>
              <th scope="col" className="text-center">Hora Chegada</th>
              <th scope="col" className="text-center">Preco Unit </th>
              <th scope="col" className="text-center">Qtd. Disponivel</th>
              <th scope="col" className="text-center">Ações</th>
            </tr>
          </thead>
          {destino.map((element) => (
            <tbody key={element.idDestino}>
              <tr className={style.tabela}>
                <td className="text-center">{element.idDestino}</td>
                <td className="text-center">{element.nomeDestino}</td>
                <td className="text-center"> <img src={"../img/" + element.imagemUrl} width="100px" /> </td>
                <td className="text-center">  {element.categoriaDestino} </td>
                <td className="text-center">{element.condicao}</td>
                <td className="text-center">{new Date(element.dataIda).toLocaleDateString()}</td>
                <td className="text-center">{new Date(element.dataChegada).toLocaleDateString()}</td>
                <td className="text-center">{element.horaIda}</td>
                <td className="text-center">{element.horaChegada}</td>
                <td className="text-center">{element.precoUnit}</td>
                <td className="text-center">{element.qtdDisponivel}</td>
                <td className="text-center">
                  <Link href={`destino/update-destino/${element.idDestino}`} className="btn btn-warning">  Editar </Link>
                  <Link href={`destino/delete-destino/${element.idDestino}`} className="btn btn btn-danger"> Excluir </Link>
                  <Link href="reserva/add-reserva" className="btn btn btn-success"> Inserir Reserva </Link>
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