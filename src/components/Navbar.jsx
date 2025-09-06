import React from 'react';
import logo from "./../assets/logo.svg";

function Navbar() {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-gradiente fixed-top shadow-sm">
      <div className="container posicao-frente">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <img src={logo} alt="Logomarca RuralConnect" height="35" width="100" className="me-2" />
          <span className="fw-bold">RuralConnect</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav"
          aria-controls="menuNav" aria-expanded="false" aria-label="Alternar navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="menuNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-lg-4">
            <li className="nav-item"><a className="nav-link active" href="#inicio">Início</a></li>
            <li className="nav-item"><a className="nav-link" href="#quem-somos">Quem Somos</a></li>
            <li className="nav-item"><a className="nav-link" href="#solucao">Solução</a></li>
            <li className="nav-item"><a className="nav-link" href="#aplicacoes">Aplicações</a></li>
            <li className="nav-item"><a className="nav-link" href="#beneficios">Benefícios</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;