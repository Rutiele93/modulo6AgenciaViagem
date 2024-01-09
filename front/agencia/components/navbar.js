import React from 'react'
import styles from '../styles/Navbar.module.css';

export default function () {
  return (
    <nav className={styles.navbar}>
      <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav ms-md-auto text-center">
        {/* Logo */}
        <li className="nav-item col-6 col-lg-auto">
          <a aria-current="true" href="/" style={{ paddingRight: 15 }}>
            <img src="../img/logo-age.png" width="100px" id="navbarLogo" />  
          </a>
        </li>
        {/* Home */}
        <li className="nav-item col-6 col-lg-auto">
          <a className="nav-link" aria-current="true" href="/" style={{ paddingRight: 15 }} >
            <img src="../img/home.png" width="30px" />  Home
          </a>
        </li>
        {/* Destinos */}
        <li className="nav-item col-6 col-lg-auto">
          <a className="nav-link" href="/destino" style={{ paddingRight: 15 }} >
            <img src="../img/destino.png" width="30px" /> Destinos
          </a>
        </li>
        {/* Promoção */}
        <li className="nav-item col-6 col-lg-auto">
          <a className="nav-link" href="/promocao" style={{ paddingRight: 15 }} >
            <img src="../img/promocao.png" width="30px" />Promoções
          </a>
        </li>
        {/* Cadastro */}
        <li className="nav-item col-6 col-lg-auto">
          <a className="nav-link" href="/cliente" style={{ paddingRight: 15 }}>
            <img src="../img/usuario.png" width="30px" />Cadastro Cliente
          </a>
        </li>

      </ul>
    </nav>
  )
}
