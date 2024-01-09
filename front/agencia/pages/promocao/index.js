import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link"; // Importe o Link para criar links de navegação

const Home = () => {
  const [promocao, setPromocao] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7023/api/Promocaos")
      .then((response) => {
        setPromocao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Promoções:", error);
      });
  }, []);

  return (
    <div className="row bd-navbar">
      <h1 className={style.h1}>Lista de Promoção</h1>
      <p>
        <a href="promocao/add-promocao" className="btn btn-primary"> Inserir Promoção</a>
      </p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-info">
              <th className="text-center">Id</th>
              <th className="text-center">Destino</th>
              <th className="text-center">Imagem</th>
              <th className="text-center">Categoria</th>
              <th className="text-center">Condicao</th>
              <th className="text-center">Data Ida</th>
              <th className="text-center">Hora Ida</th>
              <th className="text-center">Data Cheg</th>
              <th className="text-center">Hora Cheg</th>
              <th className="text-center">Duração</th>
              <th className="text-center">Preco Anterior</th>
              <th className="text-center">Preco Unit</th>
              <th className="text-center">Qtd. Disponivel</th>
              <th className="text-center">Ações</th>
              {/* Adicione uma coluna para as ações de edição e exclusão */}
            </tr>
          </thead>
          {promocao.map((element) => (
            <tbody key={element.idPromocao}>
              <tr className="table">
                <td className="text-center">{element.idPromocao}</td>
                <td className="text-center">{element.nomeDestinoProm}</td>
                <td className="text-center"> <img src={"../img/" + element.imagemUrlProm} width="100px" /> </td>
                <td className="text-center">{element.categoriaDestinoProm}</td>
                <td className="text-center">{element.condicaoProm}</td>
                <td className="text-center">{new Date(element.dataIda).toLocaleDateString()}</td>
                <td className="text-center">{element.horaIda}</td>
                <td className="text-center">{new Date(element.dataChegada).toLocaleDateString()}</td>
                <td className="text-center">{element.horaChegada}</td>
                <td className="text-center">{element.duracao}</td>
                <td className="text-center">{element.precoAnteriorProm}</td>
                <td className="text-center">{element.precoUnitProm}</td>
                <td className="text-center">{element.qtdDisponivelProm}</td>
                <td className="text-center">
                  <Link href={`promocao/update-promocao/${element.idPromocao}`} className="btn btn-warning">
                    Editar
                  </Link>
                  <Link href={`promocao/delete-promocao/${element.idPromocao}`} className="btn btn btn-danger">
                    Excluir
                  </Link>
                  <Link href="reserva/add-reservaProm" className="btn btn btn-success">
                    Inserir Reserva
                  </Link>
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
