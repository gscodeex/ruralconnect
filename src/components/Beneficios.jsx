import React from 'react';

function Beneficios() {
  return (
    <section id="beneficios" className="py-5 bg-claro">
      <div className="container text-center">
        <h2 className="titulo-secao mb-5 revela">Benefícios</h2>
        <div className="row g-4">
          <div className="col-md-6 revela">
            <div className="cartao-beneficio p-4 rounded-4 shadow-sm">
              <h3 className="fw-bold texto-verde">+15% Produtividade</h3>
              <p>Ganho de rendimento por hectare com menos perdas.</p>
            </div>
          </div>
          <div className="col-md-6 revela">
            <div className="cartao-beneficio p-4 rounded-4 shadow-sm">
              <h3 className="fw-bold texto-verde">-30% Custos</h3>
              <p>Menos horas de voo e insumos otimizados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios;