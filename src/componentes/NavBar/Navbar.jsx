import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logosmall from "../Imagenes/logosmall.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";


const Navbar = ({categoria}) =>{
    return(
      <div className="fondo-navbar">
        <nav className="navbar navbar-expand-lg  container-fluid">
          <div className="container-fluid ">
            <div className="px-3">
              <img src={logosmall} width="55" height="55" alt="Vertical" />
            </div>
              <Link to={`/`} className="navbar-brand color-letra">Vertical</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inversiones</a>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">Nosotros</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Desarrollos
                </a>
                <ul className="dropdown-menu fondo-navbar">
                  <li><Link to={`/categoria/Dalmacio Velez`} className="dropdown-item">Dalmacio Velez</Link></li>
                  <li><Link to={`/categoria/Chañares del Sur`} className="dropdown-item">Chañares del Sur</Link></li>
                  <li><Link to={`/categoria/Solar de Velez`} className="dropdown-item">Solar de Velez</Link></li>
                  <li><Link to={`/categoria/Aires Del Sur`} className="dropdown-item">Aires Del Sur</Link></li>
                  <li><Link to={`/categoria/Entorno de Bosque`} className="dropdown-item">Entorno de Bosque</Link></li>
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
