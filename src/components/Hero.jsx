import React from 'react';

function Hero() {
  return (
    <header id="inicio" className="hero d-flex align-items-center text-center text-white">
      <div className='container revela'>
        <h1 className="display-4 fw-bold">Potencializando Agricultores<br />com Drones</h1>
        <p className="lead mb-4">
          Plataforma intuitiva de mapeamento aéreo para pequenos produtores,
          microempreendedores e gestores municipais.
        </p>
        <a href="#solucao" className="btn btn-outline-light btn-lg">
          Saiba Mais <i className="bi bi-arrow-down-circle ms-1"></i>
        </a>
      </div>
    </header>
  )
}

export default Hero;