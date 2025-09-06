import React, { useState, useEffect } from 'react';

function FormContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [nomeValido, setNomeValido] = useState(null);
  const [emailValido, setEmailValido] = useState(null);
  const [mensagemValida, setMensagemValida] = useState(null);

  // Ativa animação .revela
  useEffect(() => {
    const elementos = document.querySelectorAll('.revela');
    elementos.forEach(el => el.classList.add('ativo'));
  }, []);

  // Validação em tempo real
  useEffect(() => {
    if (nome === '') setNomeValido(null);
    else setNomeValido(/^\S+\s+\S+/.test(nome));
  }, [nome]);

  useEffect(() => {
    if (email === '') setEmailValido(null);
    else setEmailValido(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  useEffect(() => {
    const len = mensagem.trim().length;
    if (mensagem === '') setMensagemValida(null);
    else setMensagemValida(len >= 30 && len <= 500);
  }, [mensagem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomeValido && emailValido && mensagemValida) {
      alert('Agradecemos o seu contato, em breve retornaremos!');
      setNome(''); setEmail(''); setMensagem('');
      setNomeValido(null); setEmailValido(null); setMensagemValida(null);
    }
  }

  return (
    <main className="flex-grow-1 pt-5 mt-4 mb-5">
      <div className="container">
        <h2 className="text-center mb-4 revela">Fale Conosco</h2>
        <form onSubmit={handleSubmit} className="col-lg-6 mx-auto needs-validation revela" noValidate>
          
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome Completo</label>
            <input
              type="text"
              id="nome"
              className={`form-control ${nomeValido === null ? '' : nomeValido ? 'is-valid' : 'is-invalid'}`}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              aria-describedby="nomeHelp"
            />
            <div id="nomeHelp" className="form-text">Informe nome e sobrenome.</div>
            <div className="invalid-feedback">Digitar nome completo (nome + sobrenome).</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              id="email"
              className={`form-control ${emailValido === null ? '' : emailValido ? 'is-valid' : 'is-invalid'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Informe um e-mail válido.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Descrição da Mensagem</label>
            <textarea
              id="mensagem"
              className={`form-control ${mensagemValida === null ? '' : mensagemValida ? 'is-valid' : 'is-invalid'}`}
              rows="5"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
            <div className="form-text">{mensagem.trim().length} / 500 caracteres</div>
            <div className="invalid-feedback">A mensagem deve ter entre 30 e 500 caracteres.</div>
          </div>

          <button className="btn btn-sucesso w-100" type="submit">
            Enviar <i className="bi bi-send ms-2"></i>
          </button>
        </form>
      </div>
    </main>
  );
}

export default FormContato;