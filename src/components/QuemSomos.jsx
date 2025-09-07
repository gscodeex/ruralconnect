import React from 'react';

function QuemSomos() {
  return (
    <section id="quem-somos" className="py-5">
      <div className="container text-center">
        <h2 className="titulo-secao mb-4 revela">Quem Somos</h2>
        <p className="texto-secao col-lg-8 mx-auto revela">
          Somos uma equipe apaixonada por tecnologia agrícola.
          Nosso objetivo é democratizar o uso de drones para monitoramento,
          análise e tomada de decisão, fortalecendo a segurança alimentar e
          a sustentabilidade no campo.
        </p>
        <section id="siga-nos" className="py-4 text-center bg-claro revela">
          <div className="container">
            <h3 className="mb-3">Acompanhe Nosso Projeto</h3>
            <a href="https://www.instagram.com/rural.connect1?igsh=MWVjY2FkcGo0OWlibg%3D%3D&utm_source=qr"
              target="_blank" rel="noopener noreferrer"
              className="d-inline-flex align-items-center btn-instagram">
              <i className="bi bi-instagram me-2"></i>
              @rural.connect1
            </a>
            <section className="pitch-video">
              <br />
              <p>Assista ao nosso Pitch Vídeo e veja como o RuralConnect evoluiu nesta fase 5.</p>
              <a href="https://youtu.be/oNSZi-GdE3U" target="_blank" rel="noopener noreferrer">
                🎥 Assistir Pitch Vídeo
              </a>
              <br />
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}

export default QuemSomos;