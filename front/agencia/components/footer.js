import React from "react";

export default function Footer() {
  return (
<div>
  {/* Footer */}
  <div className="container-fluid bd-navbar">
    <footer className="py-6 my-4">
      <ul className="nav justify-content-center border-bottom navbar navbar-expand-lg">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-color"> Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="/loja"  target="_blank" style={{ paddingLeft: 50, paddingRight: 50 }}> <img src="../img/loja.png" width="30px" /> Encontre uma loja
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-link active"  style={{ paddingLeft: 50, paddingRight: 50 }} >
            <img src="../img/tel.png" width="30px" /> Central de atendimento:
            (xx) xxxxx-xxxx | Televendas:(xx) xxxx-xxxx
          </span>
        </li>
        <li className="nav-item">
          <a  className="nav-link active" href="/ajuda" style={{ paddingLeft: 50 }}  >
            <img src="../img/ajuda.png" width="30px" /> Precisa de ajuda?
          </a>
        </li>
      </ul>
      <p className="text-center">
        © Copyright 2023 Todos os direitos reservados, Agencia R.R.R
      </p>
      <p>
        <a href="#" id="float-end"> Voltar ao início
        </a>
      </p>
    </footer>
  </div>
</div>
   
  );
}
