import React, { Component } from 'react';
import {Link} from 'react-router';

const NavBar = (props) => {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/' className="navbar-brand">{props.logo}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to='/' className="nav-link">Inicio</Link>
      </li>
      <li className="nav-item">
      <a href="https://github.com/victorratts13/RTcad" className="nav-link">Sobre</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cadastros
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to='/CFDA' className="dropdown-item">CFDA</Link>
        <Link to='/CDD' className="dropdown-item">CDD</Link>
        <Link to='/CDG' className="dropdown-item">GDM</Link>
          <div className="dropdown-divider"></div>
          <a className="disabled dropdown-item" href="#" tabindex="-1" aria-disabled="true">Versão 1.0</a>
        </div>
      </li>
      <Link to='/CH' className="nav-link">Detalhes e consultas</Link>
    </ul>
  </div>
</nav>
      );
};

export default NavBar;
