import React from 'react';
import produtor from './../assets/produtor.png'
import micro from "./../assets/micro.png";
import gestao from "./../assets/gestao.png";

function Aplicacoes({ tabAtiva, setTabAtiva }) {
  return (
    <section id="aplicacoes" className="py-5">
      <div className="container">
        <h2 className="titulo-secao text-center mb-4 revela">Áreas de Aplicação</h2>

        {/* Nav Pills */}
        <ul className="nav nav-pills justify-content-center mb-4">
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${tabAtiva === "produtor" ? "active" : ""}`}
              onClick={() => setTabAtiva("produtor")}
            >Produtor Rural</button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${tabAtiva === "micro" ? "active" : ""}`}
              onClick={() => setTabAtiva("micro")}
            >Microempreendedor</button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${tabAtiva === "gestao" ? "active" : ""}`}
              onClick={() => setTabAtiva("gestao")}
            >Gestão</button>
          </li>
        </ul>

        {/* Conteúdo das Tabs */}
        <div className="tab-content">
          {/* Produtor */}
          <div className={`tab-pane ${tabAtiva === 'produtor' ? 'show active' : ''}`}>
            <div className="row align-items-center g-4">
              <div className="col-md-6 revela">
                <img src={produtor} alt="Produtor rural no campo" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <div className="col-md-6 revela">
                <ul className="lista-aplicacao">
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Detecção precoce de pragas</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Irrigação de precisão via NDVI</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Otimização de insumos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Micro */}
          <div className={`tab-pane ${tabAtiva === 'micro' ? 'show active' : ''}`}>
            <div className="row align-items-center g-4">
              <div className="col-md-6 order-md-2 revela">
                <img src={micro} alt="Microempreendedor" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <div className="col-md-6 order-md-1 revela">
                <ul className="lista-aplicacao">
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Ortofotos para projetos</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Modelos 3D para mapas regulatórios</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Relatórios PDF prontos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gestão */}
          <div className={`tab-pane ${tabAtiva === 'gestao' ? 'show active' : ''}`}>
            <div className="row align-items-center g-4">
              <div className="col-md-6 revela">
                <img src={gestao} alt="Gestão municipal" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <div className="col-md-6 revela">
                <ul className="lista-aplicacao">
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Monitoramento de áreas de risco</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Combate a focos de dengue</li>
                  <li><i className="bi bi-check-circle-fill texto-verde me-2"></i>Planejamento urbanístico</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Aplicacoes;