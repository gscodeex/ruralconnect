import React from 'react';

function Newsletter({ mensagem, handleSubmit }) {
  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h4 className="newsletter-title">Receba Novidades</h4>
        <p className="newsletter-text">
          Inscreva-se para receber atualizações sobre nossos drones e soluções agrícolas.
        </p>

        <section className="pitch-video">
          <h2>Confira nosso Projeto</h2>
          <p>Assista ao nosso Pitch Vídeo e veja como o RuralConnect evoluiu nesta fase.</p>
          <a href="https://youtube.com/SEU_VIDEO" target="_blank" rel="noopener noreferrer">
            🎥 Assistir Pitch Vídeo
          </a>
          <br />
          <a href="https://SEU_DEPLOY.netlify.app" target="_blank" rel="noopener noreferrer">
            🌐 Acessar Site Online
          </a>
        </section>


        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Inscrever-se
          </button>
        </form>

        {mensagem && <div className="newsletter-msg">{mensagem}</div>}
      </div>
    </section>
  )
}

export default Newsletter;