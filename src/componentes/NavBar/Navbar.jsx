import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logosmall from "../Imagenes/logosmall.jpg";
import "./NavBar.css";

const Navbar = () =>{
    return(
      <div className="fondo-navbar">
        <nav className="navbar navbar-expand-lg  container-fluid">
          <div className="container-fluid ">
            <div className="px-3">
              <img src={logosmall} width="55" height="55" alt="Vertical" />
            </div>
              <a className="navbar-brand color-letra" href="#">Vertical</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inversiones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Desarrollos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Dalmacio Velez Sarfield</a></li>
                  <li><a className="dropdown-item" href="#">Las Palmas</a></li>
                  <li><a className="dropdown-item" href="#">Barrio Sur</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
    );
}

export default Navbar;
