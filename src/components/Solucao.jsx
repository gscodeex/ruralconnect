import React from 'react';

function Solucao() {
  return (
    <section id="solucao" className="py-5 bg-claro">
      <div className="container">
        <h2 className="titulo-secao text-center mb-5 revela">Nossa Solução</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4 revela">
            <div className="cartao-solucao p-4 rounded-4 h-100 shadow-sm">
              <i className="bi bi-geo-fill icone-solucao mb-3"></i>
              <h5>Planejamento de Voo</h5>
              <p>Rotas automáticas customizadas por clima, relevo e cultura.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 revela">
            <div className="cartao-solucao p-4 rounded-4 h-100 shadow-sm">
              <i className="bi bi-card-image icone-solucao mb-3"></i>
              <h5>Mapeamento & Processamento</h5>
              <p>Ortomosaicos e modelos 3D em nuvem para qualquer dispositivo.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 revela">
            <div className="cartao-solucao p-4 rounded-4 h-100 shadow-sm">
              <i className="bi bi-bar-chart-fill icone-solucao mb-3"></i>
              <h5>Análise Inteligente</h5>
              <p>Heatmaps, relatórios automatizados e histórico comparativo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solucao;