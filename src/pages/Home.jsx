// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import Solucao from '../components/Solucao';
import Aplicacoes from '../components/Aplicacoes';
import Beneficios from '../components/Beneficios';
import Fale from '../components/Fale';
import Newsletter from '../components/Newsletter';
import Rodape from '../components/Rodape';
import './../css/Home.css'

function Home() {
  const [tabAtiva, setTabAtiva] = useState('produtor');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const elementos = document.querySelectorAll('.revela');
    elementos.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], header[id]");
    const headerLinks = document.querySelectorAll("#menuNav a.nav-link");

    const onScroll = () => {
      let scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          headerLinks.forEach((link) => link.classList.remove("active"));
          const currentLink = document.querySelector(`#menuNav a.nav-link[href="#${section.id}"]`);
          if (currentLink) currentLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = document.getElementById("btnTopo");
    const toggleBtn = () => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem('Obrigado! Sua inscrição foi realizada com sucesso.');
    e.target.reset();
    setTimeout(() => setMensagem(''), 3000);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Solucao />
      <Aplicacoes tabAtiva={tabAtiva} setTabAtiva={setTabAtiva} />
      <Beneficios />
      <Fale />
      <Newsletter mensagem={mensagem} handleSubmit={handleSubmit} />

      <button
        id="btnTopo"
        className="btn-topo"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up-circle"></i>
      </button>

      <Rodape />
    </>
  )
}

export default Home;