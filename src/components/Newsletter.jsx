import React from 'react';

function Newsletter({ mensagem, handleSubmit }) {
  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h4 className="newsletter-title">Receba Novidades</h4>
        <p className="newsletter-text">
          Inscreva-se para receber atualizações sobre nossos drones e soluções agrícolas.
        </p>

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