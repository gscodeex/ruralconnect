import React from 'react';
import { Link } from 'react-router-dom';

function Fale() {
  return (
    <section id="contato" className="py-5 text-center revela">
      <div className="container">
        <h2 className="mb-4">Pronto para transformar sua produção?</h2>
        <Link to="/Contact" className="btn btn-sucesso btn-lg">
          Fale Conosco <i className="bi bi-envelope-fill ms-2"></i>
        </Link>
      </div>
    </section>
  )
}

export default Fale;