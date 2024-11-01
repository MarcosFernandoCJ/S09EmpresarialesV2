import React from 'react';

function NavComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">Mi Sitio</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Sobre Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;
